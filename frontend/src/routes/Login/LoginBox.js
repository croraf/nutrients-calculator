import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

/*const style = {
    height: 100,
    width: 100,
    padding: '10% 2%',
    textAlign: 'center'
};*/

const style = {
    width: '60%',
    padding: '5% 2% 8% 2%',
    textAlign: 'center'
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
            </Paper>
        );
    }
}

export {LoginBox};