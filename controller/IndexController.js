// export function index(req, res) {
//     res.send("<h1>I am a get request at Home route</h1>");
// }

const fs = require("fs");
const path = require("path");
exports.index = function (req, res) {
    res.render("./index" , {title: "Home Page"})
    // res.sendFile(path.resolve(__dirname + "./../views/home.html"));
}
