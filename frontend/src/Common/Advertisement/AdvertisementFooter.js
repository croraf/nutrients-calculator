import React from 'react';
import PropTypes from 'prop-types';

/* import { AltcoinGraphElement } from './AltcoinGraphElement'; */

import { embedAltcoinGraphs } from './embedAltcoinGraph';

class AdvertisementFooter extends React.Component {

    componentDidMount () {
        embedAltcoinGraphs();
    }

    render () {
        return (
            <div 
                style={{
                    margin: 'auto',
                    marginTop: '20px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around'
                }} 
                className='embedded-element' />
        );
    }
}

export {AdvertisementFooter};
