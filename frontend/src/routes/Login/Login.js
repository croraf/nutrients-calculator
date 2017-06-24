import React from 'react';
import {LoginBoxContainer} from './LoginBoxContainer';


class Login extends React.Component {
    render () {

        return (
            <div>
                <LoginBoxContainer />
                
                {/*{unauthorized===true && <div style={{textAlign: 'center', marginTop: '10px'}}>
                    <img src="http://catplanet.org/wp-content/uploads/2014/09/Cats-as-error-message-401.jpg" alt="UNAUTHORIZED"
                        width='400' height='300'/>
                </div>}*/}
            </div>

                
        );
    }
}

export {Login};