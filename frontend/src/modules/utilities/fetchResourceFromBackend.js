
const port = process.env.PORT || 3000;
const production = process.env.NODE_ENV === 'production';


// const backend = true ? 'https://wholeprotein.herokuapp.com:' + port : 'http://localhost:' + port;

let backend = '';

if (process.env.NODE_ENV === 'DEV') backend = window.location.protocol + '//' + window.location.hostname + ':3000';

const fetchResourceFromBackend = (resource, options) => {

    const token = localStorage.getItem('wholeprotein_token');
    // shallow copy not to mutate 'options', also assures options is defined
    const optionsWithAuth = Object.assign({}, options);
    // If headers exists set its Authentication field, otherwise set entire headers of options.
    optionsWithAuth.headers ? optionsWithAuth.headers.Authentication = token : optionsWithAuth.headers = {Authentication: token}; 

    console.log('API request:', resource);
    return (
        fetch(backend + resource, optionsWithAuth)
            .then(response => {
                console.log(response);
                switch (response.status) {
                    case 200:
                        return response.json();
                    case 201:
                        return response.text();
                    case 204:
                        return;
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
