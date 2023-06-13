// const Comment = require("../model/Comment");
const {Comment} = require("./../models/Comment");
const {Post} = require("../models/Post");


exports.store = async function (req, res) {
    let data = {
        text: req.body.comment,
        user_id: req.session.user._id,
        post_id: req.params.id,
    }
    let insertData = new Comment(data)
    let insertedComment = await insertData.save()
    console.log(insertedComment, 'insertedComment')

    let post = await Post.findOne({_id: req.params.id}).populate("user_id").exec()
    let pushData = post.comment.push(insertedComment._id)
    post.save();

    res.redirect("/post-view/" + req.params.id);
}