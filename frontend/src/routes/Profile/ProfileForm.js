import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';

const fieldStyle = {
    width: '100%',
    marginBottom: '10px'
};

let ProfileForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text" style={fieldStyle}/>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text" style={fieldStyle} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" style={fieldStyle} />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <Field name="age" component="input" type="number" style={fieldStyle} />
            </div>
            <div>
                <label htmlFor="sex">Sex</label>
                <div style={fieldStyle}>
                    <label>
                        <Field
                        name="sex"
                        component="input"
                        type="radio"
                        value="male"
                        />{' '}
                        Male
                    </label>
                    <label>
                        <Field
                        name="sex"
                        component="input"
                        type="radio"
                        value="female"
                        />{' '}
                        Female
                    </label>
                </div>
            </div>
            <div>
                <label>Phisical activity</label>
                <div>
                    <Field name="activity" component="select" style={fieldStyle} >
                        <option></option>
                        <option value="none">None</option>
                        <option value="minor">Minor walking</option>
                        <option value="average">Walking and minor excercise</option>
                        <option value="heavy">Heavier excercise or sports</option>
                        <option value="professional">Professional excercise or sports</option>
                    </Field>
                </div>
            </div>
            <div>
                <label htmlFor="calories">Calories</label>
                <Field name="calories" component="input" type="number" style={fieldStyle} />
            </div>
            
            <RaisedButton style={{margin: 'auto', display: 'block', width:'100px'}} label='Save' primary={true} type="submit" />
        </form>
    );
};

ProfileForm = reduxForm({
  // a unique name for the form
    form: 'profile',
    destroyOnUnmount: false,
    initialValues: {calories: 1600, sex: 'male', activity: 'none'}
})(ProfileForm);

export default ProfileForm;
