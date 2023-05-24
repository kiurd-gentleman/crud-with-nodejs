const fs = require("fs");
const db = require("./../../config/database");
const bcrypt = require("bcrypt")

exports.login = function (req, res) {
    // res.send("<h1>I am a get request at login route</h1>");
    res.render("./auth/login" , {title: "Login Page"})
}

exports.authenticate = function (req, res) {
    // console.log(req.body);
    // let email = req.body.email;
    // let password = req.body.password;
    db.run().then(async response => {
        let userData = await response.find({"email":req.body.email}).toArray();
        // console.log(userData)
        if (userData.length !== 0){
            bcrypt.compare(req.body.password, userData[0].password, function(err, result) {
                if (err) throw err;
                if (result){
                    req.session.user = userData[0];
                    return res.redirect("/home");
                }
                response.close();
            },res , userData[0] , response)
        }else {
            console.log("No Data Found");
        }
    });
    // return res.redirect("/login");
}