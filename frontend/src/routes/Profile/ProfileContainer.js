import {connect} from 'react-redux';

import {Profile} from './Profile';

import {calculateCaloriesTarget} from 'src/modules/caloriesTarget';

const mapDispatchToProps = (dispatch) => ({
    calculateCaloriesTarget: (values) => {dispatch(calculateCaloriesTarget(values));}
});

const mapStateToProps = (state) => ({
    caloriesTarget: state.caloriesTarget
});

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
