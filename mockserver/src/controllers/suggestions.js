
const getSuggestions = async (ctx, next) => {
    let responseBody = ['chocolate, white', 'chocolate, dark 70%', 'chocolate milk, 1%', 'chocolate milk, 3%'];
    
    ctx.body = responseBody.map((item) => ctx.params.ingredient + '---' + item);
};

export {getSuggestions};

