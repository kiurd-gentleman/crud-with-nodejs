let  http = require("http") ;
const app = require("./app");

const path = require("path");
const express = require("express");

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
app.listen(port, hostname, () => {
    console.log('server is running')
    console.log(`server is running at http://${hostname}:${port}`)
})