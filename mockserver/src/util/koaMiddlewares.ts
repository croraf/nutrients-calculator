import jwt from 'jsonwebtoken';

const loggedInChecker = async (ctx, next) => {

    if (ctx.url !== '/' 
        && ctx.url !== '/dist/bundle.js'
        && ctx.url !== '/dist/0.bundle.js'
        && ctx.url !== '/dist/5.bundle.js'
        && ctx.url !== '/ingredients'
        && (ctx.url !== '/login')
    ) {

        if (ctx.url === '/api/login') {
            await next();
            return;
        }

        console.log(ctx.headers.authentication);

        let decoded;
        try{
            decoded = jwt.verify(ctx.headers.authentication, 'abcd');
            console.log(decoded);
            
            await next();
        } catch (err) {
            console.log('unauthorized');
            
            ctx.redirect('/login');
        }

    } else {
        await next();
    }

};

export {loggedInChecker};
