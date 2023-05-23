exports.index = function (req, res) {
    res.render("./home" , {title: "Home Page"})
    // res.sendFile(path.resolve(__dirname + "./../views/home.html"));
}
