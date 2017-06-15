
/*const http = require('http');
var url = require('url');
var fs = require('fs');

const requestHandler = (request, response) => { 

    try {
        var requestUrl = url.parse(request.url);    
        response.writeHead(200);

        console.log(requestUrl.pathname);
        
        let resource;
        if (requestUrl.pathname === '/') {

            resource = '../frontend/index.html';
        } else if (requestUrl.pathname.match(/\/dist\//)) {

            resource = '../frontend' + requestUrl.pathname;
        } else if (requestUrl.pathname.match(/\/api\//)){

            resource = '.' + requestUrl.pathname;
        } else {
            console.log('no root, no dist, no api request');
            resource = './wrongpath';
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
});*/

const path = require('path');
const 
    Koa = require('koa'),
    /*static = require('koa-static'),*/
    send = require('koa-send'),
    router = require('koa-router')();

const app = new Koa();

// serve static files in public folder (css, js etc)
/*app.use(static(__dirname + '../dist/frontend'));*/

router.get('/api/a', async (ctx, next) => {
    console.log('serving api resource');
    ctx.body = 'hello rafa';
})

app.use(router.routes());

app.use(async (ctx) => {
    console.log('serving static resource');
    await send(ctx, ctx.path, { root: path.resolve(__dirname, '../frontend') });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log('listening on port:', port)});