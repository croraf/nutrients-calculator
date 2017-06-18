import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {reduxForm, Field} from 'redux-form';


const style = {
    maxWidth: '400px',
    width: '100%',
    padding: '3% 2% 2% 2%',
    textAlign: 'center',
    borderRadius: '3%'
};

class MyTextField extends React.Component {

    render () {

        const {floatingLabelText, type, input, meta} = this.props;

        return (
            <TextField 
                {...input}
                floatingLabelFixed={true} 
                floatingLabelText={floatingLabelText}
                type={type}
                autoComplete='off'
                style={{margin: 'auto'}}
            />
        );
    }
}

class LoginBox extends React.Component {
    render () {
            
        const {handleSubmit} = this.props;

        return (
            <Paper style={style} zDepth={4}>
                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Field 
                        name='username' 
                        component={MyTextField} 
                        floatingLabelText="Username"
                        />
                    <Field 
                        name='password' 
                        component={MyTextField} 
                        floatingLabelText="Password"
                        type="password"/>

                    <div>
                        <RaisedButton type='submit' label="Log in" primary={true} style={{margin: '30px 0px 5px 0px'}} />
                    </div>
                </form>
            </Paper>
        );
    }
}


const LoginBoxForm = reduxForm({
    form: 'login'
})(LoginBox);

export {LoginBoxForm};