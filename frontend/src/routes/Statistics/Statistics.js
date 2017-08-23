import React from 'react';
import PropTypes from 'prop-types';

import {CaloriesGraphContainer} from './CaloriesGraphContainer';

class Statistics extends React.Component {
    render () {

        return (
            <div style={{display: 'flex', justifyContent: 'center', width: '100%', height: 500}}>

                <CaloriesGraphContainer />

            </div>
        );
    }
}

export {Statistics};

