
const port = process.env.PORT || 3000;
const production = process.env.NODE_ENV === 'production';

const backend = production ? 'https://wholeprotein.herokuapp.com:' + port : 'http://localhost:' + port;

const fetchResourceFromBackend = (resource) => {

    return (
        fetch(backend + resource)
            .then((response) => response.json())
    );
};

export {fetchResourceFromBackend};