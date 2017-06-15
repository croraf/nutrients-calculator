import React from 'react';

import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import {Field} from 'redux-form';

import {FormControlWrapperContainer} from './FormControlWrapperContainer';

class FieldComponent extends React.Component {

    render () {
        
        const { controlId, label, help, ...props } = this.props;

        return (
            <FormGroup controlId={controlId}>
                <ControlLabel>{label}</ControlLabel>
                <Field name={controlId} component={FormControlWrapperContainer} {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
            </FormGroup>
        );
    }

}

export {FieldComponent};