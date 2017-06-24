import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import image from 'resources/401.png';

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

class LoginBox extends React.Component {
    render () {
            
        const {handleSubmit, rejected} = this.props;

        return (
            
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10%'}}>
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
                            floatingLabelText="Password (USE 'admin')"
                            type="password"/>

                        <div style={{display: 'flex', flexDirection: 'column', position: 'relative'}}>
                            {
                                rejected && 
                                <div style={{color: 'red', position: 'absolute', width: '100%'}}>Invalid username or password</div>
                            }
                            <RaisedButton type='submit' label="Log in" primary={true} style={{margin: 'auto', marginTop: '30px'}} />
                        </div>
                    </form>
                    
                {/*<div>
                    {
                        unauthorized && 
                        <img 
                            width={360}
                            height={270}
                            src='https://blog.dashburst.com/wp-content/uploads/2014/03/6508023065_1b3bf710ce_o-728x582.jpg' />
                    }
                </div>*/}
                </Paper>
            </div>
        );
    }
}


const LoginBoxForm = reduxForm({
    form: 'login'
})(LoginBox);

export {LoginBoxForm};