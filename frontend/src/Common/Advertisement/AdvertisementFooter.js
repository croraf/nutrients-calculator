import React from 'react';
import PropTypes from 'prop-types';

import { embedAltcoinGraphs } from './embedAltcoinGraph';
import { Row, Col } from 'react-flexbox-grid';

import './advertisement-style.css';

class AdvertisementFooter extends React.Component {

    componentDidMount () {
        embedAltcoinGraphs();
    }

    render () {
        return (
            <Row 
                style={{
                    margin: 'auto',
                    marginTop: '5px',
                    padding: '10px',
                    border: '2px solid rgb(0, 188, 212)',
                    borderRadius: '5px'
                }} >
                <Col xs={12} sm={6} lg={3}
                    className='embedded-element'/>
                <Col xs={12} sm={6} lg={3}
                    className='embedded-element'/>
                <Col xs={12} sm={6} lg={3}
                    className='embedded-element'/>
                <Col xs={12} sm={6} lg={3}
                    className='embedded-element'/>
            </Row>
        );
    }
}

export {AdvertisementFooter};
