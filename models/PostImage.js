const mongoose = require("mongoose")

const postImageSchema = new mongoose.Schema({
    path: String,
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    created_at: { type: Date, default: Date.now },
})

exports.PostImage = mongoose.model("Post_image", postImageSchema)
