import {connect} from 'react-redux';
import { submit } from 'redux-form';

import {openDialogue, closeDialogue/*, saveDialogue*/} from 'modules/defineIngredientDialogue';
import {saveIngredient, updateIngredient} from 'modules/ingredientsAdmin';

import {Admin} from './Admin';

const mapDispatchToProps = (dispatch) => ({

    openDialogue: () => {dispatch(openDialogue());},
    closeDialogue: () => {dispatch(closeDialogue());},
    saveDialogue: () => {dispatch(submit('manageNutrients')); dispatch(closeDialogue());},

    saveIngredient: (values, editId) => {editId ? dispatch(updateIngredient(values, editId)) : dispatch(saveIngredient(values));}
});

const mapStateToProps = (state) => ({

    open: state.defineIngredientDialogue.open,
    initialValues: state.defineIngredientDialogue.initialValues,
    editId: state.defineIngredientDialogue.editId
});

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export {AdminContainer};