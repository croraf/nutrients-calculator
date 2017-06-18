
const loginRequestHandler = async (ctx, next) => {

    const body = ctx.request.body;

    console.log(body);

    const JwtHeader = {
        "alg": "HS256",
        "typ": "JWT"
    };

    const JwtPayload = {
        "sub": "1234567890",
        "name": body.username,
        "admin": true
    };

    const JwtSign = {
        "sign": 'asdasdadaadad'
    }

    ctx.body = {
        header: JwtHeader,
        payload: JwtPayload,
        sign: JwtSign
    };
};

export {loginRequestHandler};