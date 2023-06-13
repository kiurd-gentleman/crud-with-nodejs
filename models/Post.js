const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    created_at: { type: Date, default: Date.now },
    image: Object,
    comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

exports.Post = mongoose.model("Post", postSchema)
