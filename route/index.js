const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
    console.log(0)
    res.send("<h1>I am a get request at Home route</h1>");
});

router.get("/register", (req, res) => {
    // res.send("<h1>I am a get request at register route</h1>");
    fs.readFile("./views/auth/register.html", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        }
    })
});

router.get("/login", (req, res) => {
    // res.send("<h1>I am a get request at login route</h1>");
    fs.readFile("./views/auth/login.html", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        }
    })
});

module.exports = router;