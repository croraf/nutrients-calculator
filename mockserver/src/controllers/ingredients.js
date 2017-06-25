const ingredientNames = [
    'apple', 'chocolate, white', 'chocolate, dark 70%', 'chocolate milk, 1%', 'chocolate milk, 3%',
    'banana', 'orange', 'oat leafs', 'rice, white', 'rice, brown', 'bread, white', 'pineapple', 'pear', 'cherry', 'milk, 3%',
    'milk, 1%', 'tomato', 'potato', 'olive oil',
    'sunflower oil', 'beans, kidney'
];

const ingredients = {};

ingredientNames.forEach((ingredientName) => {
    const id = new Buffer(ingredientName).toString('base64');
    ingredients[id] = {name: ingredientName};
}, this);


const getIngredients = async (ctx, next) => {

    const returnedIngredients = {};
    Object.keys(ingredients).forEach((key) => {
        returnedIngredients[key] = ingredients[key].name;
    }, this);
    
    console.log(returnedIngredients);

    ctx.body = returnedIngredients;
    //ctx.body = Object.values(ingredients).map(ingredient => ingredient.name); //responseBody.map((item) => ctx.params.ingredient + '---' + item);
    
};

const addIngredient = async (ctx, next) => {

    const body = ctx.request.body;
    console.log(body);
    const id = new Buffer(body.name).toString('base64');
    ingredients[id] = body;

    console.log(id);
    ctx.status = 201;
    ctx.body = id;
};

const deleteIngredient = async (ctx, next) => {

    const ingredientId = ctx.params.ingredientId;
    console.log(ingredientId);
    delete ingredients[ingredientId];

    ctx.status = 204;
};

const getIngredientById = async (ctx, next) => {

    console.log(ctx.params.ingredientId);

    ctx.body = ingredients[ctx.params.ingredientId];
};

const updateIngredient = async (ctx, next) => {

    console.log(ctx.params.ingredientId);

    ingredients[ctx.params.ingredientId] = ctx.request.body;
    ctx.body = ctx.request.body;
};

export default {addIngredient, getIngredients, deleteIngredient, getIngredientById, updateIngredient};

