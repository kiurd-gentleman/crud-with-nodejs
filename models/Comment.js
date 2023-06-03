const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    text: String,
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    created_at: { type: Date, default: Date.now },
})

exports.Comment = mongoose.model("Comment", commentSchema)
