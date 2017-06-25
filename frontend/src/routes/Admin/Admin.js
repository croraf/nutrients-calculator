import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { submit } from 'redux-form';

import {NutrientForm} from './NutrientForm/NutrientForm';
import {IngredientsListContainer} from './IngredientsListContainer';


import {openDialogue, closeDialogue/*, saveDialogue*/} from 'modules/defineIngredientDialogue';
import {saveIngredient, updateIngredient} from 'modules/ingredientsAdmin';


const buttonOuterStyle = {
    position: 'absolute',
    bottom: '-30px',
    right: '50px',
    zIndex: 100
};

class Admin extends React.Component {

    handleSaveSubmit = (values) => {
        this.props.saveIngredient(values, this.props.editId);
    }

    render () {

        const {openDialogue, closeDialogue, saveDialogue, open, initialValues} = this.props;

        const actions = [
            <FlatButton
            label="Save ingredient"
            primary={true}
            keyboardFocused={true}
            onTouchTap={saveDialogue}
            />,
            <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={closeDialogue}
            />
        ];

        return (
            <div style={{padding: '10px'}}>
                
                <Dialog
                    title="Define ingredient"
                    actions={actions}
                    modal={false}
                    open={open}
                    onRequestClose={closeDialogue}
                    autoScrollBodyContent={true}
                    >
                    
                    <NutrientForm onSubmit={this.handleSaveSubmit} initialValues={initialValues} />
                </Dialog>

                <div style={{position: 'relative'}}>

                    <IngredientsListContainer />
                    
                    <FloatingActionButton onTouchTap={openDialogue} style={buttonOuterStyle} zDepth={3}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
            
        );
    }
}

import {connect} from 'react-redux';

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

export {AdminContainer as Admin};