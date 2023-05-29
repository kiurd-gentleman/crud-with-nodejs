const fs = require("fs");
const bcrypt = require("bcrypt")
const {User} = require("./../../models/User");

exports.login = function (req, res) {
    res.render("./auth/login" , {title: "Login Page"})
}

exports.authenticate = async function (req, res) {
    let user = await User.findOne({"email": req.body.email})
    if (user) {
        bcrypt.compare(req.body.password, user.password, function (err, result) {
            if (err) throw err;
            if (result) {
                console.log('User logged in successfully')
                req.session.user = user;
                return res.redirect('/home');
            }
        }, res ,req ,user)

    }else {
        console.log("No Data Found");
        return res.redirect("/login");
    }

    // await model.user().then(async response => {
    //     let userData = await response.find({"email": req.body.email}).toArray();
    //     // console.log(userData)
    //     if (userData.length !== 0) {
    //         bcrypt.compare(req.body.password, userData[0].password, function (err, result) {
    //             if (err) throw err;
    //             if (result) {
    //                 req.session.user = userData[0];
    //                 return res.redirect("/home");
    //             }
    //             response.close();
    //         }, res, userData[0], response)
    //     } else {
    //         console.log("No Data Found");
    //     }
    // });
}