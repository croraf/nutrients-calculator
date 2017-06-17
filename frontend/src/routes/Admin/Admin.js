import React from 'react';

import {NutrientForm} from './NutrientForm/NutrientForm';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

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

    render () {

        const actions = [
            <FlatButton
            label="Save ingredient"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose}
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
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                    >
                    
                    <NutrientForm onSubmit={(values) => {console.log('submitting: ' + JSON.stringify(values));}} />
                </Dialog>
            </div>
            
        );
    }
}

export {Admin};