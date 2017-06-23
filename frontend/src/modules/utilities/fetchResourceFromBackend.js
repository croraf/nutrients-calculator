
/*const port = process.env.PORT || 3000;
const production = process.env.NODE_ENV === 'production';*/


// const backend = true ? 'https://wholeprotein.herokuapp.com:' + port : 'http://localhost:' + port;

let backend = '';

if (window.location.hostname === 'localhost') backend = window.location.protocol + '//' + window.location.hostname + ':3000';

const fetchResourceFromBackend = (resource, options) => {

    console.log('fetching', resource);
    return (
        fetch(backend + resource, options)
            .then(response => {
                console.log(response);
                switch (response.status) {
                    case 200:
                        return response.json();
                    case 401:
                        throw new Error('unauthorized');
                    case 400:
                        throw new Error('bad request');
                    default:
                        throw new Error('unknown error');
                }
            })
    );
};

const sendLoginRequestAPI = (credentials) => {

    /*const data = new FormData();
    data.append('json', JSON.stringify(credentials));*/

    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    };

    return fetchResourceFromBackend('/api/login', options);
};

export {fetchResourceFromBackend, sendLoginRequestAPI};