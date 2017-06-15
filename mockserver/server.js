
const http = require('http');
var url = require('url');
var fs = require('fs');

const requestHandler = (request, response) => { 

    try {
        var requestUrl = url.parse(request.url);    
        response.writeHead(200);

        console.log(requestUrl.pathname);
        
        let resource;
        if (requestUrl.pathname === '/') {
            resource = './index.html';
        } else {
            resource = '.' + requestUrl.pathname;
        }
        
        console.log(resource);
    
        var fileStream = fs.createReadStream(resource);

        fileStream.pipe(response);  // do NOT use fs's sync methods ANYWHERE on production (e.g readFileSync) 
        fileStream.on('error', (e) => {
            response.writeHead(404);     // assume the file doesn't exist
            response.write('Rafa: resource does not exist\n\n', e);
            response.end();
        });
    } catch (e) {
        console.log('rafa: internal error', e);
        response.writeHead(500);
        response.end();  // end the response so browsers don't hang
    }
};

const server = http.createServer(requestHandler);

const port = process.env.PORT || 3000;

server.listen(port, (err) => {  
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});