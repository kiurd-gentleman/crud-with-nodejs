const fs = require("fs");
const db = require("./../../config/database");

exports.login = function (req, res) {
    // res.send("<h1>I am a get request at login route</h1>");
    res.render("./auth/login" , {title: "Login Page"})
}

exports.authenticate = function (req, res) {
    console.log(req.body);
    // let email = req.body.email;
    // let password = req.body.password;
    db.run().then(async response => {
        let res = await response.find({}).toArray();
        console.log("Connected successfully to server", res);
    });
    return res.send("I am a post request at login route");
}