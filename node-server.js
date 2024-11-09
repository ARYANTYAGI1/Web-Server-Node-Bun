const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.statusCode=200;
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello World')
    } else {
        res.statusCode=404;
        res.setHeader('Content-Type', 'text/plain')
        res.end('Page Not Found') 
    }
});

server.listen(3000, ()=>{
    console.log('Server Started on Port: 3000')
})
