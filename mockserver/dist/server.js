function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
const Koa = require('koa'),

/*static = require('koa-static'),*/
send = require('koa-send'),
      router = require('koa-router')();

const app = new Koa();

// serve static files in public folder (css, js etc)
/*app.use(static(__dirname + '../dist/frontend'));*/

router.get('/api/a', (() => {
    var _ref = _asyncToGenerator(function* (ctx, next) {
        console.log('serving api resource');
        ctx.body = 'hello rafa';
    });

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
})());

app.use(router.routes());

app.use((() => {
    var _ref2 = _asyncToGenerator(function* (ctx) {
        console.log('serving static resource');
        yield send(ctx, ctx.path, { root: path.resolve(__dirname, '../../frontend') });
    });

    return function (_x3) {
        return _ref2.apply(this, arguments);
    };
})());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening on port:', port);
});