import {connect} from 'react-redux';

import {NutritionResultsTable} from './NutritionResultsTable2';

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    foodsAnalyzed: state.nutrients.foodsAnalyzed
});

const NutritionResultsTableContainer2 = connect(mapStateToProps, mapDispatchToProps)(NutritionResultsTable);

export {NutritionResultsTableContainer2};
