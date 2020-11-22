import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

class MyTextField extends React.Component {

    render() {

        const { label, type, input, meta } = this.props;

        return (
            <div>
                <TextField
                    {...input}
                    InputLabelProps={{ shrink: true }}
                    label={label}
                    type={type}
                    autoComplete='off'
                    style={{ margin: '0.5rem auto' }}
                />
                {input.error && <span>Invalid</span>}
            </div>
        );
    }
}

MyTextField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    input: PropTypes.object,
    meta: PropTypes.object
};

export { MyTextField };
