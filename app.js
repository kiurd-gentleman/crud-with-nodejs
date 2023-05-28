const express = require("express");
const app = express();
const sessions = require('express-session');

const cookieParser = require("cookie-parser");

// app.set('views', path.join(__dirname, 'views'));
app.use(
    sessions({
        secret: 'HGILUG-KHVBIG-UYFVYF-UYFVYF',
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // 24 hours
        },
        resave: true,
        saveUninitialized: false,
    })
);

app.use(cookieParser());
const userRouter = require("./route/index");
const bodyParser = require("body-parser");

app.use(userRouter);
// app.use("/api/user", userRouter);
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

module.exports = app;