let  http = require("http") ;
const app = require("./app");

const path = require("path");
const express = require("express");
const {connect} = require("./config/database");

app.set('view engine', 'ejs')

app.use(
    "/css",
    express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
)
app.use(
    "/js",
    express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
)

const hostname = '127.0.0.1';
const port = 8080;
const startServer = async () => {
    await connect();
    app.listen(port, hostname, () => {
        console.log(`server is running at http://${hostname}:${port}`)
    })
};
startServer().then(r => {
    console.log(r);
})