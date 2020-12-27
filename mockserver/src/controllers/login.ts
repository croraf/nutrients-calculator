
import {checkCredentials} from '../dao/loginDAO';
import jwt from 'jsonwebtoken';

const loginRequestHandler = async (ctx, next) => {

    const body = ctx.request.body;

    console.log(body);

    if (checkCredentials(body)){

        /*const JwtHeader = {
            'alg': 'HS256',
            'typ': 'JWT'
        };

        const JwtPayload = {
            'sub': '1234567890',
            'name': body.username,
            'admin': true
        };

        const JwtSign = {
            'sign': 'asdasdadaadad'
        };

        ctx.body = {
            header: JwtHeader,
            payload: JwtPayload,
            sign: JwtSign
        };*/

        ctx.status = 201;
        //ctx.body = 'HS256JWT.' + body.username + '.asdadadsad';
        console.log(jwt.sign({name: body.username}, 'abcd'));
        ctx.body = jwt.sign({name: body.username}, 'abcd');
    } else {

        ctx.status = 401;
    }

        
};

export {loginRequestHandler};
