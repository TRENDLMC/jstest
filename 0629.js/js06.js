"use strict";

const http=require('http');
const url=require('url');

const hostname='127.0.0.1';
const port=3000;

const sercer =http.createServer((req,res)=>{
    switch(req.method){
        case 'GET':
            if(req.url === '/'){
                res.setHeader('Content-Type','text/plain');
                res.writeHead(200);
                res.end('Hello! Node.js Http Server');
            }else if(req.url.substring(0,5) === '/data'){
                const queryParams=url.paese(req,url,true).query;
                
                res.setHeader('Content-Type','text/html');
                res.writeHead(200);
                res.write('<html><head><title>JavaScript 200제</title></head>')

                for(let key in queryParams){
                    res.write(`<h1>${key}</h1>`)
                    res.write(`<h2>${queryParams[key]}</h2>`);
                }

                res.end('</body></html>')
            }
            break;
        default:
            res.end();
    }
});

sercer.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});