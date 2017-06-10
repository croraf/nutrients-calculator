import {connect} from 'react-redux';

import {ScriptCodeInput} from './ScriptCodeInput';

const mapDispatchToProps = (dispatch) => ({
    save: () => {dispatch({type: 'SAVE_START'});}
});

const mapStateToProps = (state) => ({
    testCase: state.testCaseActive.testCase
});

const ScriptCodeInputContainer = connect(mapStateToProps, mapDispatchToProps)(ScriptCodeInput);


export {ScriptCodeInputContainer};