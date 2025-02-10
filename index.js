const https = require('http');
const fs =  require('fs');
const myServer =  https.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} New Req Received\n `;
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url)
        {
            case "/" : res.end("Home Page");
            break;
            case "/about" : res.end("I am Palla Geethamrutha");
            break;
            default : res.end("404 Not Found");
        }
    });
});
myServer.listen(8000 , ()=> console.log("Server Started!"));