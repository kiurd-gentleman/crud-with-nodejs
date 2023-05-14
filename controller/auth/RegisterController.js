const fs = require("fs");


exports.register = function (req, res) {
    // res.send("<h1>I am a get request at register route</h1>");
    fs.readFile("./views/auth/register.html", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        }
    })
}