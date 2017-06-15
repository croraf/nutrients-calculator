import {connect} from 'react-redux';

import {NutritionResultsTable} from './NutritionResultsTable';

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    nutrientsList: state.ingredients.nutrientsList
});

const NutritionResultsTableContainer = connect(mapStateToProps, mapDispatchToProps)(NutritionResultsTable);

export {NutritionResultsTableContainer};