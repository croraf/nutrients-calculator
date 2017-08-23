import {connect} from 'react-redux';

import {NutritionResultsTable} from './NutritionResultsTable';

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    foodsAnalyzed: state.nutrients.foodsAnalyzed
});

const NutritionResultsTableContainer = connect(mapStateToProps, mapDispatchToProps)(NutritionResultsTable);

export {NutritionResultsTableContainer};
