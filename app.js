const express = require("express");
const app = express();
const userRouter = require("./route/index");
const bodyParser = require("body-parser");

app.use(userRouter);
// app.use("/api/user", userRouter);
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

module.exports = app;