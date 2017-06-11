import {connect} from 'react-redux';

import {Calculator} from './Calculator';

import {fetchNutrients} from 'modules/ingredients';

const mapDispatchToProps = (dispatch) => ({
    calculateHandler: (ingredients) => {dispatch(fetchNutrients(ingredients));}
});

const mapStateToProps = (state) => ({

});

const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator);

export {CalculatorContainer};