import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

import { CaloriesGraphContainer } from './CaloriesGraphContainer';

const Statistics = () => {
    return (
        <Grid fluid>
            <Row>
                <Col xs={12}
                    style={{
                        minWidth: '700px',
                        margin: '20px 0px',
                        border: '1px solid rgb(0, 188, 212)',
                        minHeight: '600px'
                    }}>

                    <CaloriesGraphContainer />

                </Col>
            </Row>
        </Grid>

    );
};

export default Statistics;

