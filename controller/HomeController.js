const {Post} = require("../models/Post");



exports.index = async function (req, res) {
    let posts = await Post.find({})
    res.render("./home", {title: "Home Page" , posts: posts})
}
