import React from 'react';

/*import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';*/
import {Field} from 'redux-form';
import TextField from 'material-ui/TextField';

class FormControlWrapper extends React.Component {

    render () {

        const {label} = this.props;
        
        return (
            <div>
                {/*Enhanced FormControl if it is the name of the ingredient, rather than quantity*/}
                {/*{input.name.match(/\.name$/) ?
                    <FormControl {...input} onChange={this.onChangeHandler} onFocus={this.onFocusHandler} autoComplete="off" {...props} />
                    : <FormControl {...input} {...props} />
                }*/}
                <TextField
                    floatingLabelText={label}
                    fullWidth={true}
                    />
                
            </div>
        );
    }
}

class FieldComponent extends React.Component {

    render () {
        
        const { controlId, help, ...props } = this.props;

        return (
            <div>
            {/*<FormGroup controlId={controlId}>
                <ControlLabel>{label}</ControlLabel>*/}
                <Field name={controlId} component={FormControlWrapper} {...props} />
             {/*   {help && <HelpBlock>{help}</HelpBlock>}
            </FormGroup>*/}
            </div>
        );
    }

}

export {FieldComponent};
