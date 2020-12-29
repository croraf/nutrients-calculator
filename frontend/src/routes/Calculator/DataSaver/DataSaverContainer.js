import {connect} from 'react-redux';

import {DataSaver} from './DataSaver';




const DataSaverContainer = connect(mapStateToProps, mapDispatchToProps)(DataSaver);

export {DataSaverContainer};
