
import React from 'react';
import PropTypes from 'prop-types';

import ProfileForm from './ProfileForm';

class Profile extends React.Component {
    render () {
        return (
            <div style={{position: 'relative', width: '400px', margin: 'auto',
                marginTop: '10px', marginBottom: '10px', border: '2px solid black',
                borderRadius: '5px', borderColor: 'rgb(0, 188, 212)'}} >
                
                <h2 style={{textAlign: 'center', color: 'rgb(0, 188, 212)'}}>
                    My Profile
                </h2>
                
                <div style={{position: 'relative', width: '90%', margin: 'auto'}}>

                    <ProfileForm onSubmit={(values) => {console.log(values);}} />

                </div>
            </div>
        );
    }
}

export {Profile};
