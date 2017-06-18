import {connect} from 'react-redux';

import {IngredientsList} from './IngredientsList';

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    ingredientsList: state.suggestions.list
});

const IngredientsListContainer = connect(mapStateToProps, mapDispatchToProps)(IngredientsList);

export {IngredientsListContainer};