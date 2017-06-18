import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    maxWidth: '400px',
    width: '100%',
    padding: '3% 2% 2% 2%',
    textAlign: 'center',
    borderRadius: '3%'
};

class LoginBox extends React.Component {
    render () {
        return (
            
            <Paper style={style} zDepth={4}>
                <TextField
                    hintText=""
                    floatingLabelText="Username"
                    floatingLabelFixed={true}
                    /><br />
                <TextField
                    hintText=""
                    floatingLabelText="Password"
                    type="password"
                    floatingLabelFixed={true}
                    /><br />
                <RaisedButton label="Log in" primary={true} style={{margin: 12}} />
            </Paper>
        );
    }
}

export {LoginBox};