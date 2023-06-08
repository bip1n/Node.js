// routing in node.js

const http =require("http");
const { type } = require("os");

const server = http.createServer((req, res)=>{
    if(req.url ==="/"){
        res.end('Hello from the other side');
    }
    else if (req.url==="/about"){
        res.end('Hello from the about us side');
    }
    else if (req.url==="/contact"){
        res.end('Hello from the contact us side');
    }
    else{
        res.writeHead(404),{"Content-type" : "text/html"};
        res.end("<h1> 404 Error!\nPage does not exists.<h1>")
    }
    
});
server.listen(3000,"localhost",()=>{
    console.log("Listening to the port number: 3000")
})