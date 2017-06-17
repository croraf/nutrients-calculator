import React from 'react';

import {NutrientForm} from './NutrientForm/NutrientForm';

class Admin extends React.Component {
    render () {
        return (
            <div style={{padding: '10px'}}>
                <NutrientForm onSubmit={(values) => {console.log('submitting: ' + JSON.stringify(values));}} />
            </div>
        );
    }
}

export {Admin};