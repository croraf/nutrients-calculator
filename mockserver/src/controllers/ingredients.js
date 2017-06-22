const ingredients = [
    'apple', 'chocolate, white', 'chocolate, dark 70%', 'chocolate milk, 1%', 'chocolate milk, 3%',
        'banana', 'orange', 'oat leafs', 'rice, white', 'rice, brown', 'bread, white', 'pineapple', 'pear', 'cherry', 'milk, 3%',
        'milk, 1%', 'tomato', 'potato', 'olive oil',
        'sunflower oil', 'beans, kidney'
];

const getIngredients = async (ctx, next) => {
    console.log('ingredients');
    ctx.body = ingredients; //responseBody.map((item) => ctx.params.ingredient + '---' + item);
};

const addIngredient = async (ctx, next) => {

    console.log(ctx.request.body);
    ingredients.push(ctx.request.body);

    ctx.body = ctx.request.body;
}

export default {addIngredient, getIngredients};

