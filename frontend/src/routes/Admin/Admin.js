import React from 'react';


import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { submit } from 'redux-form';


import {NutrientForm} from './NutrientForm/NutrientForm';
import {IngredientsListContainer} from './IngredientsListContainer';

import {saveIngredient} from 'modules/ingredients';

const buttonOuterStyle = {
    position: 'absolute',
    bottom: '-30px',
    right: '50px',
    zIndex: 100
};

const iconStyle = {
    /*width: '48px',
    height: '48px',
    pointerEvents: 'none',
    position: 'absolute'*/
};

class Admin extends React.Component {

    state = {
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
    }

    render () {

        const actions = [
            <FlatButton
            label="Save ingredient"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleSave}
            />,
            <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose}
            />
        ];

        return (
            <div style={{padding: '10px'}}>

                {/*<RaisedButton label="Add ingredient" onTouchTap={this.handleOpen} style={{margin: '10px'}}/>*/}
                
                <Dialog
                    title="Define ingredient"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                    >
                    
                    <NutrientForm onSubmit={this.props.saveIngredient}  />
                </Dialog>

                <div style={{position: 'relative'}}>

                    <IngredientsListContainer />
                    
                    <FloatingActionButton onTouchTap={this.handleOpen} style={buttonOuterStyle} zDepth={3}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
            
        );
    }
}

import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
    remoteSubmit: () => {dispatch(submit('manageNutrients'));},
    saveIngredient: (values) => {dispatch(saveIngredient(values));}
});

const mapStateToProps = (state) => ({

});

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export {AdminContainer as Admin};