const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const multer = require('multer')
// const upload = multer({dest: 'storage/'})
const RegisterController = require("./../controller/auth/RegisterController");
const LoginController = require("./../controller/auth/LoginController");
const bodyParser = require("body-parser");
const IndexController = require("../controller/IndexController");
const HomeController = require("../controller/HomeController");
const PostController = require("../controller/PostController");
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "storage/");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `admin-${file.fieldname}-${Date.now()}.${ext}`);
    },
});
const multerFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] === "pdf" ||
        file.mimetype.split("/")[1] === "docx" ||
        file.mimetype.split("/")[1] === "doc" ||
        file.mimetype.split("/")[1] === "txt" ||
        file.mimetype.split("/")[1] === "pptx" ||
        file.mimetype.split("/")[1] === "ppt" ||
        file.mimetype.split("/")[1] === "xlsx" ||
        file.mimetype.split("/")[1] === "xls" ||
        file.mimetype.split("/")[1] === "csv" ||
        file.mimetype.split("/")[1] === "zip" ||
        file.mimetype.split("/")[1] === "rar" ||
        file.mimetype.split("/")[1] === "jpg" ||
        file.mimetype.split("/")[1] === "jpeg" ||
        file.mimetype.split("/")[1] === "png" ||
        file.mimetype.split("/")[1] === "gif" ||
        file.mimetype.split("/")[1] === "svg" ||
        file.mimetype.split("/")[1] === "mp4" ||
        file.mimetype.split("/")[1] === "mkv" ||
        file.mimetype.split("/")[1] === "mp3" ||
        file.mimetype.split("/")[1] === "wav" ||
        file.mimetype.split("/")[1] === "ogg" ||
        file.mimetype.split("/")[1] === "webm" ||
        file.mimetype.split("/")[1] === "m4a" ||
        file.mimetype.split("/")[1] === "aac" ||
        file.mimetype.split("/")[1] === "flac" ||
        file.mimetype.split("/")[1] === "wma" ||
        file.mimetype.split("/")[1] === "avi" ||
        file.mimetype.split("/")[1] === "mov" ||
        file.mimetype.split("/")[1] === "wmv" ||
        file.mimetype.split("/")[1] === "flv" ||
        file.mimetype.split("/")[1] === "3gp" ||
        file.mimetype.split("/")[1] === "mkv" ) {
        cb(null, true);
    } else {
        cb(null, true);

        // cb(new Error("Not a PDF File!!"), false);
    }
};
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
});

router.get("/", (req, res) => {
    IndexController.index(req, res);
});

router.get("/home", checkAuth, (req, res) => {
    HomeController.index(req, res);
});

router.get("/register", (req, res) => {
    RegisterController.index(req, res);
});

router.post("/register", bodyParser.urlencoded(), (req, res) => {
    RegisterController.register(req, res);
});

router.get("/login", webAuth, (req, res) => {
    // res.send("<h1>I am a get request at login route</h1>");
    LoginController.login(req, res);
});

router.post('/login', webAuth, bodyParser.urlencoded(), (req, res) => {
    LoginController.authenticate(req, res);
});

router.get("/logout", (req, res) => {
    req.session.destroy();
    return res.redirect("/login");
});

router.get('/post-create', (req, res) => {
    PostController.create(req, res);
    // res.render("./create" , {title: "Create Page"})
})

router.post('/post-create', upload.array("files"), bodyParser.urlencoded(), (req, res) => {
    // console.log(req.body);
    // console.log(req.files);
    PostController.store(req, res);
    // res.render("./create" , {title: "Create Page"})
})

function checkAuth(req, res, next) {
    if (req.session.user) {
        return next();
    } else {
        return res.redirect("/login");
    }
}

function webAuth(req, res, next) {
    if (req.session.user) {
        return res.redirect("/home");
    } else {
        return next();
    }
}


module.exports = router;