// const {mongoose} = require("./../config/database");
const bcrypt = require("bcrypt");
const {Post} = require("./../models/Post");
const {PostImage} = require("../models/PostImage");
// const PostImage = require("./../models/PostImage");



exports.create = function (req, res) {
    res.render("./post-create", {title: "Create Page"})
}

exports.store = async function (req, res) {

    let files = [];

    let data = {
        title: req.body.title,
        description: req.body.description,
        user_id: req.session.user._id
    }
    let insertData = new Post(data)
    insertData.save()

    for (let i = 0; i < req.files.length; i++) {
        files[i] = {
            post_id: insertData._id,
            path: req.files[i].path,
        };

    }
    await PostImage.collection.insertMany(files)

    res.redirect("/post-create");
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