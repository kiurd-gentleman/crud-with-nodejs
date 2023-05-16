const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const HomeController = require("./../controller/HomeController");
const RegisterController = require("./../controller/auth/RegisterController");
const LoginController = require("./../controller/auth/LoginController");

router.get("/", (req, res) => {
    HomeController.index(req, res);
});


router.get("/register", (req, res) => {
    RegisterController.register(req, res);
});

router.get("/login", (req, res) => {
    // res.send("<h1>I am a get request at login route</h1>");
    LoginController.login(req, res);
});

router.post('/login', (req, res) => {
    LoginController.authenticate(req, res);
});


module.exports = router;