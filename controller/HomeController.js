const {Post} = require("../models/Post");
const { dirname } = require('path');
const appDir = dirname(require.main.filename);


exports.index = async function (req, res) {
    // fetch all posts and post images

    let posts = await Post.find({}).populate("user_id").exec()
    console.log(posts)
    console.log(appDir)

    res.render("./home", {title: "Home Page" , posts: posts , appDir: appDir})
}
