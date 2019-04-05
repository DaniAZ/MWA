const http=require('http');
const path=require('path');
const url=require('url');
const { fork } = require('child_process');
const server=http.createServer();

server.on('request',(req,res)=>{
    const childProcess=fork('readTextFile.js');

    const pathToFile=path.join(__dirname,'wordCount.txt');
     childProcess.send(pathToFile);

     res.writeHead(200, { "Content-Type": "text/plain" });
     childProcess.on('message', data => {
         res.write(data);
         res.end();
     });

})
server.listen(3000,()=>console.log("server is listening"));

