import 'babel-polyfill';

import path from 'path';

import {
    getNutritiveInfo
} from './controllers/nutritiveInfo';
import ingredients from './controllers/ingredients';
import {
    loginRequestHandler
} from './controllers/login';

import * as swagger from 'swagger2';
import {
    validate,
    ui
} from 'swagger2-koa';

import historyApiFallback from 'koa-history-api-fallback';

import './main';
import {getFoods} from './fetchFoods/fetchFoods';
import {loggedInChecker} from './util/koaMiddlewares';

const
    Koa = require('koa'),
    /*koaStatic = require('koa-static'),*/
    send = require('koa-send'),
    router = require('koa-router')(),
    cors = require('koa-cors'),
    koaBody = require('koa-body');

const app = new Koa();


// load YAML swagger file
const document = swagger.loadDocumentSync('./api.yml');

// validate document
if (!swagger.validateDocument(document)) {
    throw Error('./swagger.yml does not conform to the Swagger 2.0 schema');
}

app.use(cors());

app.use(koaBody({
    jsonLimit: '1kb'
}));

/* app.use(loggedInChecker); */

app.use(validate(document));

// serve static files in public folder (css, js etc)
/*app.use(koaStatic(__dirname + '../dist/frontend'));*/

router.post('/api/login/', loginRequestHandler);
router.get('/api/nutritiveInfo', getNutritiveInfo);
router.get('/api/ingredients/', /* ingredients.getIngredients */ getFoods);
router.post('/api/ingredients/', ingredients.addIngredient);
router.get('/api/ingredients/:ingredientId', ingredients.getIngredientById);
router.delete('/api/ingredients/:ingredientId', ingredients.deleteIngredient);
router.put('/api/ingredients/:ingredientId', ingredients.updateIngredient);

/* router.use(loggedInChecker); */

app.use(router.routes());

app.use(ui(document, '/swagger'));

app.use(historyApiFallback({logger: console.log})); 

app.use(async(ctx) => {
    console.log('serving static resource, incomingPath:', ctx.path);
    let urlPath = ctx.path;
    if (ctx.path === '/') urlPath = '/index.html';
    await send(ctx, urlPath, {
        root: path.resolve(__dirname, '../../frontend')
    });
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening on port:', port);
});
