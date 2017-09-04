import {connect} from 'react-redux';

import {Calculator} from './Calculator';

import {fetchNutrients} from 'modules/nutrients';

const mapDispatchToProps = (dispatch) => ({
    calculateHandler: (ingredients, dataSource) => {dispatch(fetchNutrients(ingredients, dataSource));}
});

const mapStateToProps = (state) => ({
    dataSource: state.ingredients.ingredients
});

const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator);

export default CalculatorContainer;
