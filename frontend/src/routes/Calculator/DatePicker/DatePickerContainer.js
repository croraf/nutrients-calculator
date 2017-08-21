import {connect} from 'react-redux';

import {MyDatePicker} from './MyDatePicker';

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({

});

const DatePickerContainer = connect(mapStateToProps, mapDispatchToProps)(MyDatePicker);

export {DatePickerContainer};
