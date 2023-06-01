const mongoose = require("mongoose")

exports.connect = async () => {
    mongoose.connect("mongodb://localhost:27017/nodejs_prectise", {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("Connected to database");
        }).catch(err => {
        console.log(err);
    })
}
