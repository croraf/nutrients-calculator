import React from 'react';


import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import { submit } from 'redux-form';


import {NutrientForm} from './NutrientForm/NutrientForm';
import {IngredientsList} from './IngredientsList';

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

                <RaisedButton label="Add ingredient" onTouchTap={this.handleOpen} />
                <Dialog
                    title="Define ingredient"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                    >
                    
                    <NutrientForm onSubmit={(values) => {console.log('submitting: ' + JSON.stringify(values));}}  />
                </Dialog>

                <IngredientsList />
            </div>
            
        );
    }
}

import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
    remoteSubmit: () => {dispatch(submit('manageNutrients'));}
});

const mapStateToProps = (state) => ({

});

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export {AdminContainer as Admin};