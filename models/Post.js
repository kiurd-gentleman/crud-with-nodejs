const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: String,
    description: String
})

exports.Post = mongoose.model("Post", postSchema)
