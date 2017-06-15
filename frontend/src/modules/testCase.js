
const fetchTestCase = (fileId) => (dispatch) => {

    fetch('https://jsonplaceholder.typicode.com/posts/' + fileId).then((response) => {
        return response.json();
    }).then((responseObject) => {
        console.log(responseObject);
        console.log('file resolved');

        dispatch({type: 'TEST_CASE_RECEIVED', testCase: responseObject});
    });
};

export {fetchTestCase};


const testCaseActive = (state={testCase:{title: 'NO TEST CASE SELECTED', body: 'NO TEST CASE SELECTED'}}, action) => {
    switch (action.type) {
    case 'TEST_CASE_RECEIVED':
        return {
            testCase: action.testCase
        };
    default:
        return state;
    }
};


export {testCaseActive};