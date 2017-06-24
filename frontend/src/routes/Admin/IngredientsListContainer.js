import {connect} from 'react-redux';

import {IngredientsList} from './IngredientsList';

import {deleteIngredient} from 'modules/ingredients';

const mapDispatchToProps = (dispatch) => ({
    deleteIngredient: (id) => {dispatch(deleteIngredient(id));},
    editIngredient: (id) => {console.log('edit ingredient', id);}
});

const mapStateToProps = (state) => ({
    ingredients: state.ingredients.ingredients
});

const IngredientsListContainer = connect(mapStateToProps, mapDispatchToProps)(IngredientsList);

export {IngredientsListContainer};