const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const RegisterController = require("./../controller/auth/RegisterController");
const LoginController = require("./../controller/auth/LoginController");
const bodyParser = require("body-parser");
const IndexController = require("../controller/IndexController");
const HomeController = require("../controller/HomeController");


router.get("/", (req, res) => {
    IndexController.index(req, res);
});

router.get("/home", checkAuth, (req, res) => {
    HomeController.index(req, res);
});

router.get("/register", (req, res) => {
    RegisterController.index(req, res);
});

router.post("/register", bodyParser.urlencoded(), (req, res) => {
    RegisterController.register(req, res);
});

router.get("/login", webAuth, (req, res) => {
    // res.send("<h1>I am a get request at login route</h1>");
    LoginController.login(req, res);
});

router.post('/login', webAuth, bodyParser.urlencoded(), (req, res) => {
    LoginController.authenticate(req, res);
});

router.get("/logout", (req, res) => {
    console.log("Logout" , req.session.user);
    req.session.destroy();
    return res.redirect("/login");
});

function checkAuth(req, res, next) {
    if (req.session.user) {
        return next();
    } else {
        return res.redirect("/login");
    }
}

function webAuth(req, res, next) {
    if (req.session.user) {
        return res.redirect("/home");
    } else {
        return next();
    }
}


module.exports = router;