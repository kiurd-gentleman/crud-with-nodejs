
const fs = require("fs");
const path = require("path");
exports.index = function (req, res) {
    res.render("./index" , {title: "Home Page"})
}
