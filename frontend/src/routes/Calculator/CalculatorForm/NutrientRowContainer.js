import {connect} from 'react-redux';

import {NutrientRow} from './NutrientRow';

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    suggestions: state.suggestions.list
});

const NutrientRowContainer = connect(mapStateToProps, mapDispatchToProps)(NutrientRow);

export {NutrientRowContainer};