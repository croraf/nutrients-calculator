import {connect} from 'react-redux';

import {IngredientsList} from './IngredientsList';

import {deleteIngredient, editIngredient} from 'src/modules/ingredientsAdmin';

const mapDispatchToProps = (dispatch) => ({
    deleteIngredient: (id) => {dispatch(deleteIngredient(id));},
    editIngredient: (id) => {dispatch(editIngredient(id));}
});

const mapStateToProps = (state) => ({
    ingredients: state.ingredients.ingredients
});

const IngredientsListContainer = connect(mapStateToProps, mapDispatchToProps)(IngredientsList);

export {IngredientsListContainer};
