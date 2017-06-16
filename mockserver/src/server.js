import "babel-polyfill";

import path from 'path';

import {getNutritiveInfo} from './controllers/nutritiveInfo';
import {getSuggestions} from './controllers/suggestions';

const 
    Koa = require('koa'),
    /*static = require('koa-static'),*/
    send = require('koa-send'),
    router = require('koa-router')(),
    cors = require('koa-cors');

const app = new Koa();

app.use(cors());

// serve static files in public folder (css, js etc)
/*app.use(static(__dirname + '../dist/frontend'));*/

router.get('/api/nutritiveInfo', getNutritiveInfo);
router.get('/api/suggestions/:ingredient', getSuggestions);

app.use(router.routes());

app.use(async (ctx) => {
    console.log('serving static resource');
    console.log(ctx.path);
    let urlPath = ctx.path;
    if (ctx.path === '/') urlPath = '/index.html';
    await send(ctx, urlPath, { root: path.resolve(__dirname, '../../frontend') });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log('listening on port:', port)});