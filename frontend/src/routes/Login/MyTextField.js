import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';

class MyTextField extends React.Component {

    render () {

        const {floatingLabelText, type, input, meta} = this.props;

        return (
            <div>
                <TextField 
                    {...input}
                    floatingLabelFixed={true} 
                    floatingLabelText={floatingLabelText}
                    type={type}
                    autoComplete='off'
                    style={{margin: 'auto'}}
                />
                {input.error && 
                <span>
                    Invalid
                </span>}
            </div>
        );
    }
}

MyTextField.propTypes = {
    floatingLabelText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    input: PropTypes.object,
    meta: PropTypes.object
};

export {MyTextField};