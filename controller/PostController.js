const bcrypt = require("bcrypt");
const {Post} = require("./../models/Post");
const {PostImage} = require("../models/PostImage");
const fs = require("fs");
const path = require("path");
const { dirname } = require('path');
const appDir = dirname(require.main.filename);



exports.create = function (req, res) {
    res.render("./post-create", {title: "Create Page"})
}

exports.store = async function (req, res) {

    let files = [];

    let data = {
        title: req.body.title,
        description: req.body.description,
        user_id: req.session.user._id,
        image : []
    }

    console.log(req.files , 'files')
    // console.log(__dirname + '/storage/' + req.files[0].filename , 'directory')
    for (let i = 0; i < req.files.length; i++) {
        files[i] = {
            data: fs.readFileSync(path.join(appDir + '/storage/' + req.files[i].filename)),
            contentType: 'image/png'
        };
    }
    data.image = files;
    let insertData = new Post(data)
    insertData.save()


    res.redirect("/post-create");
}

exports.comment = async function (req, res) {

    console.log(req.body.comment)

}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result +'-'+ Date.now();
}

exports.view = async function (req, res) {
    let post = await Post.findOne({_id: req.params.id}).populate("user_id").populate('comment').exec()
    // console.log(post , 'post')
    res.render("./post-view", {title: "View Page" , post: post , appDir: appDir})
}