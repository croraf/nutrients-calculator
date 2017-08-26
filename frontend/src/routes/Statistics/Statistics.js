import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-flexbox-grid';

import {CaloriesGraphContainer} from './CaloriesGraphContainer';

class Statistics extends React.Component {
    render () {

        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} xsOffset={0} md={8} mdOffset={2} style={{minHeight: '600px', height: '80%'}}>
                
                        
                        <CaloriesGraphContainer />
                    
                    </Col>
                </Row>
            </Grid>

        );
    }
}

export {Statistics};

