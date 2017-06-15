import React from 'react';

import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import {Field} from 'redux-form';

import {SuggestionsBoxContainer} from './SuggestionsBoxContainer';

class FormControlWrapper extends React.Component {
    render () {

        const {input, meta, ...props} = this.props;

        return (
            <div>
                <FormControl {...input} {...props} />
                
                {meta.active && input.name.match(/\.name$/) && <SuggestionsBoxContainer />}
            </div>
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