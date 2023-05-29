const fs = require("fs");
const {User} = require("./../../models/User");
const hash = require('crypto');
const bcrypt = require("bcrypt")
// const model = require("./../../models/User");


exports.index = function (req, res) {
    res.render("./auth/register", {title: "Register Page"})
}

exports.register = async function (req, res) {

    let data = {
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        address: req.body.address,
    }

    let user = new User(data);
    user.save().then(response => {
        console.log(response, "response");
        // res.redirect("/login");

    } , res)
    res.redirect("/register");
}