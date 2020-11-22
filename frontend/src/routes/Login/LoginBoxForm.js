import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { reduxForm, Field } from 'redux-form';

import { MyTextField } from './MyTextField';

//planned to show funny image if unauthorized
//import image from 'resources/401.png';


const style = {
    maxWidth: '400px',
    width: '100%',
    padding: '1.5rem',
    textAlign: 'center',
    borderRadius: '3%'
};

class LoginBox extends React.Component {
    render() {

        const { handleSubmit, rejected } = this.props;

        return (

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
                <Paper style={style} elevation={4}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Field
                            name='username'
                            component={MyTextField}
                            label="Username"
                            type="text"
                        />
                        <Field
                            name='password'
                            component={MyTextField}
                            label="Password (USE 'admin')"
                            type="password" />

                        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                            {
                                rejected &&
                                <div style={{ color: 'red', position: 'absolute', width: '100%' }}>Invalid username or password</div>
                            }
                            <Button variant='outlined' type='submit' color='primary' style={{ margin: 'auto', marginTop: '1.8rem' }}>
                                Log in
                            </Button>
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

LoginBox.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    rejected: PropTypes.bool
};



//////////////////////////////////////////////////////////////////////////////////////////////
const LoginBoxForm = reduxForm({
    form: 'login'
})(LoginBox);

LoginBoxForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    rejected: PropTypes.bool
};

export { LoginBoxForm };
