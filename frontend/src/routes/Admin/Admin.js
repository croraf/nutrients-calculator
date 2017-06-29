import React from 'react';
import PropTypes from 'prop-types';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import {NutrientForm} from './NutrientForm/NutrientForm';
import {IngredientsListContainer} from './IngredientsListContainer';

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

Admin.propTypes = {
    openDialogue: PropTypes.func.isRequired,
    closeDialogue: PropTypes.func.isRequired,
    saveDialogue: PropTypes.func.isRequired,
    saveIngredient: PropTypes.func.isRequired,
    editId: PropTypes.string,
    open: PropTypes.bool,
    // TODO: define all ingredients
    initialValues: PropTypes.object
};



export {Admin};
