
/*const port = process.env.PORT || 3000;
const production = process.env.NODE_ENV === 'production';*/


// const backend = true ? 'https://wholeprotein.herokuapp.com:' + port : 'http://localhost:' + port;

let backend = '';

if (window.location.hostname === 'localhost') backend = window.location.protocol + '//' + window.location.hostname + ':3000';

const fetchResourceFromBackend = (resource) => {

    return (
        fetch(backend + resource)
            .then((response) => response.json())
    );
};

export {fetchResourceFromBackend};