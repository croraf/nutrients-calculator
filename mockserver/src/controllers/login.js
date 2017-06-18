
const loginRequestHandler = async (ctx, next) => {

    const JwtHeader = {
        "alg": "HS256",
        "typ": "JWT"
    };

    const JwtPayload = {
        "sub": "1234567890",
        "name": "John Doe",
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