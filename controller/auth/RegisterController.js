const fs = require("fs");
const db = require("./../../config/database");
const hash = require('crypto');
const bcrypt = require("bcrypt")
const model = require("./../../models/User");


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

    model.user().then(async response => {
        let res = await response.insertOne(data, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            response.close();
        });
        console.log("Data Insert successfully to Database", res);
    });
    res.redirect("/register");
}