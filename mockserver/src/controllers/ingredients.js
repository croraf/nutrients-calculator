
const getIngredients = async (ctx, next) => {
    let responseBody = ['apple', 'chocolate, white', 'chocolate, dark 70%', 'chocolate milk, 1%', 'chocolate milk, 3%',
        'banana', 'orange', 'oat leafs', 'rice, white', 'rice, brown', 'bread, white', 'pineapple', 'pear', 'cherry', 'milk, 3%',
        'milk, 1%', 'tomato', 'potato', 'olive oil',
        'sunflower oil', 'beans, kidney'];
    
    ctx.body = responseBody; //responseBody.map((item) => ctx.params.ingredient + '---' + item);
};

export {getIngredients};

