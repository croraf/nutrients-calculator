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
                    marginTop: '5px',
                    padding: '10px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    backgroundColor: 'rgb(0, 188, 212)',
                    borderRadius: '5px'
                }} 
                className='embedded-element' />
        );
    }
}

export {AdvertisementFooter};
