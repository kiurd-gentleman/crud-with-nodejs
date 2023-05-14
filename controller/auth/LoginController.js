const fs = require("fs");

exports.login = function (req, res) {
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
}