// const {mongoose} = require("./../config/database");
const bcrypt = require("bcrypt");
const {Post} = require("./../models/Post");
// const PostImage = require("./../models/PostImage");



exports.create = function (req, res) {
    res.render("./post-create", {title: "Create Page"})
}

exports.store = async function (req, res) {

    let insertedID = ''
    let files = [];
    // let post_id = makeid(10);

    console.log(req.body);
    let data = {
        title: req.body.title,
        description: req.body.description,
    }

    // mongoose.connect("mongodb://localhost:27017/nodejs_prectise", { useNewUrlParser: true, useUnifiedTopology: true })
    //     .then(() => {
    //         console.log("Connected to database");
    //     }).catch(err => {
    //         console.log(err);
    //     })

    // const postSchema = new mongoose.Schema({
    //     title: String,
    //     description: String
    // })

    // const Post = mongoose.model("Post", postSchema)
    // await PostModel.post().then(async response => {
    //     let res = await response.insertOne(data, function (err, res) {
    //         if (err) throw err;
    //         console.log("1 document inserted" + res.insertedId);
    //         response.close();
    //     });
    //     insertedID = res.insertedId;
    // })
    // let msg = new post(data);
    let insertData = new Post(data)
    insertData.save().then(r => {
        console.log(r, "r");
    })

    console.log(insertData , "insertData");
    // for (let i = 0; i < req.files.length; i++) {
    //     files[i] = {
    //         post_id: insertedID,
    //         name: req.files[i].filename,
    //         path: req.files[i].path,
    //     };
    // }
    // PostImage.postImages().then(async response => {
    //     let res = await response.insertMany(files, function (err, res) {
    //         if (err) throw err;
    //         response.close();
    //     });
    // })
    res.redirect("/post-create");
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result +'-'+ Date.now();
}