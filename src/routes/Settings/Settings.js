import React from 'react';

import {SettingsForm} from './SettingsForm/SettingsForm';

class Settings extends React.Component {
    render () {
        return (
            <div style={{padding: '20px'}}>
                <SettingsForm onSubmit={(values) => {console.log('submitting: ' + JSON.stringify(values));}} />
            </div>
        );
    }
}

export {Settings};