const http = require("http");
const port = 8090;

const server = http.createServer((req,res)=>{
    res.write("This is my first server that is being started");
    res.end();
});



server.listen(port,()=>{
    console.log(`Server is started on port number ${port}`);
});