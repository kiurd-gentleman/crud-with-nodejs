const db = require("../config/database");
const {Post} = require("../models/Post");
// const model = require("./../models/Post");



exports.index = async function (req, res) {

    let posts = await Post.find({})
    // model.post().then(async response => {
    //     let data = await response.find({}).toArray();
    //     res.render("./home" , {title: "Home Page", posts: data})
    //
    // },res)
    res.render("./home", {title: "Home Page" , posts: posts})
    // res.sendFile(path.resolve(__dirname + "./../views/home.html"));
}
