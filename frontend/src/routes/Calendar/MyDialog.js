import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import PropTypes from 'prop-types';


import Dialog from 'material-ui/Dialog';

class MyDialog extends React.Component {

    render () {

        const {open, onClose, onConfirm} = this.props;

        const actions = [ <FlatButton
            label="No"
            primary={true}
            onClick={onClose}
            />,
            <FlatButton
            label="Yes"
            primary={true}
            keyboardFocused={true}
            onClick={onConfirm}
            />,
        ];

        return (
            
            <Dialog 
                open={open} 
                modal={false}
                actions={actions}
                title='Existing data!'
                onRequestClose={onClose}>
                This date already has data. Do you want to edit?
            </Dialog>
        );
    }
}

export {MyDialog};
