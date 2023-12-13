const { log } = require('console');
const http = require('http');
const fs=require('fs');

const index=fs.readFileSync('index.html', 'utf-8');

const data=fs.readFileSync('data.json','utf-8')


// const data = { age: 19 };
const server = http.createServer((req, res) => {

    // console.log(req.url);

    switch(req.url){
        case'/':
       res.setHeader('Content-Type','text/html')
       res.end(index);
       break;

        case'/api':
        res.setHeader('Content-Type','application/json');
        res.end(data);
        break;
        default:
            res.writeHead(404,'Not Found Page');
            res.end()
    }
    console.log('Server started');
    // res.end('<h1>Hello</h1>')

    // res.setHeader('Content-Type','text/html')
    // res.end(index)
 

    // res.end(JSON.stringify(data));
})

server.listen(8080)
