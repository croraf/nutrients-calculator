import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import { Row, Col } from 'react-flexbox-grid';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const fieldStyle = {
    width: '100%',
    marginBottom: '10px',
    marginLeft: '2px'
};

const fieldStyle2 = {
    width: '100px',
    marginLeft: '5px',
    marginBottom: '10px'
};

class MyTextField extends React.Component {
    render () {
        const {input, meta, type, label} = this.props;

        return (
            <div>
                <TextField 
                    {...input}
                    type={type}
                    floatingLabelText={label}
                    fullWidth={true}
                    errorText={meta.error && 'required'}/>
            </div>
        );
    }
}

class MyRadioField extends React.Component {
    render () {
        const {input, meta, label} = this.props;

        return (
            
            <RadioButtonGroup 
                name={input.name}
                valueSelected={input.value}
                {...input}
                style={{border: '1px solid lightgray', margin: 'auto', textAlign: 'center', height: '52px', paddingTop: '10px'}}>

                <RadioButton
                    value="male"
                    label="Male"
                />
                <RadioButton
                    value="female"
                    label="Female"
                />
            </RadioButtonGroup>
        );
    }
}

class MySelectField extends React.Component {
    render () {
        const {input, meta, label} = this.props;

        return (
            
            <SelectField
                floatingLabelText={label}
                fullWidth={true}
                {...input} 
                onChange={ (event, key, payload) => {input.onChange(payload);} } >
                
                <MenuItem value='none' primaryText="None" />
                <MenuItem value='minor' primaryText="Minor walking" />
                <MenuItem value='average' primaryText="Walking and minor excercise" />
                <MenuItem value='heavy' primaryText="Heavier excercise or sports" />
                <MenuItem value='pro' primaryText="Professional excercise or sports" />
            </SelectField>
        );
    }
}


let ProfileForm = props => {

    const { handleSubmit, caloriesTarget } = props;

    return (
        <form onSubmit={ handleSubmit }>
            <Field name='firstName' label='First Name' component={MyTextField} />
            <Field name='lastName' label='Last Name' component={MyTextField} />
            <Field name='email' label='E-mail' component={MyTextField} type='email' />

            <Row>
                <Col xs={6} style={{minWidth: '200px'}}>
                    <Field name='height' label='Height' component={MyTextField} type='number' />
                </Col>
                <Col xs={6}  style={{minWidth: '200px'}}>
                    <Field name='weight' label='Weight' component={MyTextField} type='number' />
                </Col>
            </Row>

            <Row>
                <Col xs={6} style={{minWidth: '200px'}}>
                    <Field name='age' label='Age' component={MyTextField} type='number' />
                </Col>
                <Col xs={6} style={{minWidth: '200px'}}>
                    <Field name='sex' label='Sex' component={MyRadioField} />
                </Col>
            </Row>

                

            <div>
                <Field name='activity' label='Physical activity' component={MySelectField} />
            </div>

            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '20px'}}>
                <RaisedButton 
                    style={{}}
                    label='Calculate Calories Target'
                    primary={true}
                    type="submit" />
            </div>
            
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
                <div style={{fontSize: 24}}>
                    <span style={{
                        display: 'inline-block',
                        border: '1px solid rgb(0, 188, 212)',
                        borderRadius: '4px',
                        width: '100px', 
                        textAlign: 'center',
                        marginLeft: '100px'
                    }}>
                        {caloriesTarget.toFixed(0)}
                    </span>
                    <span style={{
                        display: 'inline-block',
                        width: '100px', 
                        textAlign: 'left'
                    }}>
                        kcal
                    </span>
                </div>
            </div>
            
            {/* <RaisedButton style={{margin: 'auto', display: 'block', width:'100px', marginBottom: '10px'}}
                label='Save'
                primary={true}
                onClick={() => {}} /> */}
        </form>
    );
};

ProfileForm = reduxForm({
  // a unique name for the form
    form: 'profile',
    destroyOnUnmount: false,
    initialValues: {sex: 'female', activity: 'minor', firstName: 'rafa', height: '200', weight: '100', age: 30}
})(ProfileForm);

export default ProfileForm;
