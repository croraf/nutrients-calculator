import React from 'react';


import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { submit } from 'redux-form';

import {openDialogue, closeDialogue/*, saveDialogue*/} from 'modules/defineIngredientDialogue';

import {NutrientForm} from './NutrientForm/NutrientForm';
import {IngredientsListContainer} from './IngredientsListContainer';

import {saveIngredient} from 'modules/ingredients';

const buttonOuterStyle = {
    position: 'absolute',
    bottom: '-30px',
    right: '50px',
    zIndex: 100
};

class Admin extends React.Component {

    /*state = {
        open: false,
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }
    
    handleSave = () => {
        this.handleClose();
        this.props.remoteSubmit();
    }*/

    render () {

        const {openDialogue, closeDialogue, saveDialogue, saveIngredient, open} = this.props;

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

                {/*<RaisedButton label="Add ingredient" onTouchTap={this.handleOpen} style={{margin: '10px'}}/>*/}
                
                <Dialog
                    title="Define ingredient"
                    actions={actions}
                    modal={false}
                    open={open}
                    onRequestClose={closeDialogue}
                    autoScrollBodyContent={true}
                    >
                    
                    <NutrientForm onSubmit={saveIngredient}  />
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
    /*remoteSubmit: () => {dispatch(submit('manageNutrients'));},*/
    saveIngredient: (values) => {dispatch(saveIngredient(values));},

    openDialogue: () => {dispatch(openDialogue());},
    closeDialogue: () => {dispatch(closeDialogue());},
    saveDialogue: () => {dispatch(submit('manageNutrients')); dispatch(closeDialogue());}
});

const mapStateToProps = (state) => ({
    open: state.defineIngredientDialogue
});

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export {AdminContainer as Admin};