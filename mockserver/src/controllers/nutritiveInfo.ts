import { fetchRelative } from "../util/utils";

const getNutritiveInfo = async (ctx, next) => {
    console.log('get nutritive info:', ctx.request.query.fdcIds);

    return fetchRelative(
        'foods', undefined, '&fdcIds=' + ctx.request.query.fdcIds
    ).then(response => {
        return response.json();
    }).then(result => {
        ctx.body = result;
    });
};

export { getNutritiveInfo };
