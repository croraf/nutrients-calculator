
const http = require('http');
var url = require('url');
var fs = require('fs');

const port = 3000;

const requestHandler = (request, response) => { 

    try {
        var requestUrl = url.parse(request.url);    
        response.writeHead(200);

        console.log(requestUrl.pathname);
        
    
        var fileStream = fs.createReadStream('.' + requestUrl.pathname);
        fileStream.pipe(response);  // do NOT use fs's sync methods ANYWHERE on production (e.g readFileSync) 
        fileStream.on('error', (e) => {
            response.writeHead(403);     // assume the file doesn't exist
            response.write('ja sam rafo');
            response.end();
        });
    } catch (e) {
        console.log('rafa: internal error', e);
        response.writeHead(500);
        response.end();  // end the response so browsers don't hang
    }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {  
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});