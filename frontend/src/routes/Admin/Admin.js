import React from 'react';
import PropTypes from 'prop-types';

import FloatingActionButton from '@material-ui/core/FloatingActionButton';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import ContentAdd from '@material-ui/icons/Add';

import { NutrientForm } from './NutrientForm/NutrientForm';
import { IngredientsListContainer } from './IngredientsListContainer';

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

    render() {

        const { openDialogue, closeDialogue, saveDialogue, open, initialValues } = this.props;

        const actions = [
            <Button
                label="Save ingredient"
                color='primary'
                keyboardFocused={true}
                onClick={saveDialogue}
            />,
            <Button
                label="Cancel"
                color='primary'
                onClick={closeDialogue}
            />
        ];

        return (
            <div style={{ padding: '10px' }}>

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

                <div style={{ position: 'relative' }}>

                    <IngredientsListContainer />

                    <FloatingActionButton onClick={openDialogue} style={buttonOuterStyle} zDepth={3}>
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
    editId: PropTypes.string, // only available when Dialogue is open for editing existing nutrient
    open: PropTypes.bool,
    // TODO: define all ingredients
    initialValues: PropTypes.object
};



export { Admin };
