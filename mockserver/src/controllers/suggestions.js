
const getSuggestions = async (ctx, next) => {
    ctx.body = ['chocolate, white', 'chocolate, dark 70%', 'chocolate milk, 1%', 'chocolate milk, 3%'];
};

export {getSuggestions};