import Button from '@material-ui/core/Button';
import React from 'react';


import Dialog from '@material-ui/core/Dialog';

class MyDialog extends React.Component {

    render() {

        const { open, onClose, onConfirm } = this.props;

        const actions = [<Button
            label="No"
            primary={true}
            onClick={onClose}
        />,
        <Button
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

export { MyDialog };
