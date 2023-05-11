let  http = require("http") ;
const app = require("./app");

// let server = http.createServer((req, res) => {
//     res.end('Hello World');
// });

const hostname = '127.0.0.1';
const port = 8080;
app.listen(port, hostname, () => {
    console.log('server is running')
    console.log(`server is running at http://${hostname}:${port}`)
})