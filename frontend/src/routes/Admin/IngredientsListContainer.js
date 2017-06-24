import {connect} from 'react-redux';

import {IngredientsList} from './IngredientsList';

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    ingredients: state.ingredients.ingredients
});

const IngredientsListContainer = connect(mapStateToProps, mapDispatchToProps)(IngredientsList);

export {IngredientsListContainer};