const http = require('http')
const port = 8080

http.createServer((req, res) => {
    res.end("Hello Server")
}).listen(port)

console.log(`Server Running on port : ${port}`)