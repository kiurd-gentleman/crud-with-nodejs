const db = require("../config/database");
const model = require("./../models/Post");



exports.index = function (req, res) {
    model.post().then(async response => {
        let data = await response.find({}).toArray();
        res.render("./home" , {title: "Home Page", posts: data})

    },res)
    // res.render("./home" , {title: "Home Page"})
    // res.sendFile(path.resolve(__dirname + "./../views/home.html"));
}
