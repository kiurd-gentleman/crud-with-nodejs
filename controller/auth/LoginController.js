const fs = require("fs");

exports.login = function (req, res) {
    // res.send("<h1>I am a get request at login route</h1>");
    res.render("./auth/login" , {title: "Login Page"})
}

exports.authenticate = function (req, res) {
    console.log(req.body);
}