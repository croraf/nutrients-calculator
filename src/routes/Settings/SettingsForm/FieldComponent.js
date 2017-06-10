import React from 'react';

import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import {Field} from 'redux-form';

class FormControlWrapper extends React.Component {
    render () {

        const {input, meta, ...props} = this.props;

        return (
            <FormControl {...input} {...props} />
        );
    }
}

class FieldComponent extends React.Component {

    render () {
        
        const { controlId, label, help, ...props } = this.props;

        return (
            <FormGroup controlId={controlId}>
                <ControlLabel>{label}</ControlLabel>
                <Field name={controlId} component={FormControlWrapper} {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
            </FormGroup>
        );
    }

}

export {FieldComponent};