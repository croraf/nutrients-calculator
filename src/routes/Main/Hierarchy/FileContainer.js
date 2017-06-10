import {connect} from 'react-redux';

import {FileComponent} from './FileComponent';

import {fetchTestCase} from 'modules/testCase';

const mapDispatchToProps = (dispatch) => ({
    selectTestCase: (fileId) => dispatch(fetchTestCase(fileId))
});

const mapStateToProps = (state) => ({

});

const FileContainer = connect(mapStateToProps, mapDispatchToProps)(FileComponent);

export {FileContainer};