import React from 'react';
import {LoginBox} from './LoginBox';

class Login extends React.Component {
    render () {
        return (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10%'}}>
                <LoginBox />
            </div>
        );
    }
}

export {Login};