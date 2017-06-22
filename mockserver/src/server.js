import "babel-polyfill";

import path from 'path';

import {getNutritiveInfo} from './controllers/nutritiveInfo';
import {getIngredients} from './controllers/ingredients';
import {loginRequestHandler} from './controllers/login';

const 
    Koa = require('koa'),
    /*static = require('koa-static'),*/
    send = require('koa-send'),
    router = require('koa-router')(),
    cors = require('koa-cors'),
    koaBody = require('koa-body');

const app = new Koa();

app.use(cors());

app.use(koaBody({
  jsonLimit: '1kb'
}));

// serve static files in public folder (css, js etc)
/*app.use(static(__dirname + '../dist/frontend'));*/

router.post('/api/login/', loginRequestHandler);
router.get('/api/nutritiveInfo', getNutritiveInfo);
// router.get('/api/ingredients/:ingredient', getIngredients);
router.get('/api/ingredients/', getIngredients);

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