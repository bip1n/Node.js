/* Creating web server using node.js */
const http =require("http");
const server = http.createServer((req, res)=>{
    res.end('Hello from the other side');
});
server.listen(3000,"localhost",()=>{
    console.log("Listening to the port number: 3000")
})