import React from 'react';
import {LoginBoxContainer} from './LoginBoxContainer';

class Login extends React.Component {
    render () {
        return (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10%'}}>
                <LoginBoxContainer />
            </div>
        );
    }
}

export {Login};