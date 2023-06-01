const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: String,
    created_at: { type: Date, default: Date.now },
})

exports.User = mongoose.model("User", userSchema)
