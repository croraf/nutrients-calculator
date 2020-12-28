import React from 'react';

/*import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';*/
import { Field } from 'redux-form';

import { FormControlWrapperContainer } from './FormControlWrapperContainer';


class FieldComponent extends React.Component {

    render() {

        const { controlId, help, ...props } = this.props;

        return (
            <div>
                {/*<FormGroup controlId={controlId}>
                <ControlLabel>{label}</ControlLabel>*/}
                <Field name={controlId} component={FormControlWrapperContainer} {...props} />
                {/*   {help && <HelpBlock>{help}</HelpBlock>}
            </FormGroup>*/}
            </div>
        );
    }

}

export { FieldComponent };
