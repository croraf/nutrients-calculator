
const fetchResourceFromBackend = (resource, options) => {

    if (resource === '/api/ingredients'){
        return (
            new Promise((resolve, reject) => {
                resolve([{name: 'apple'}, {name: 'banana'}]);
            })
        );
    }

};

export {fetchResourceFromBackend};