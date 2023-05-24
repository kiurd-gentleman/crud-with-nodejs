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

router.get("/login", (req, res) => {
    // res.send("<h1>I am a get request at login route</h1>");
    LoginController.login(req, res);
});

router.post('/login', bodyParser.urlencoded(), (req, res) => {
    LoginController.authenticate(req, res);
});

function checkAuth(req, res, next) {

    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }

}

module.exports = router;