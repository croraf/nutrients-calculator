
const checkCredentials = (credentials) => {

    if (credentials.password === 'admin') {
        return true;
    } else {
        return false;
    }
};

export {checkCredentials};
