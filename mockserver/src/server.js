import "babel-polyfill";

const path = require('path');

import {getNutritiveInfo} from './controllers/nutritiveInfo';
import {getSuggestions} from './controllers/suggestions';

const 
    Koa = require('koa'),
    /*static = require('koa-static'),*/
    send = require('koa-send'),
    router = require('koa-router')();

const app = new Koa();

// serve static files in public folder (css, js etc)
/*app.use(static(__dirname + '../dist/frontend'));*/

router.get('/api/nutritiveInfo', getNutritiveInfo);
router.get('/api/suggestions', getSuggestions);

app.use(router.routes());

app.use(async (ctx) => {
    console.log('serving static resource');
    await send(ctx, ctx.path, { root: path.resolve(__dirname, '../../frontend') });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log('listening on port:', port)});