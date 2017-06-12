import React from 'react';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';

import {NavigationBarContainer} from './NavigationBarContainer';

class Header extends React.Component {
    render () {
        return (
            
            <PageHeader style={{marginTop: '0px', paddingTop: '10px', paddingBottom: '0px', backgroundColor: 'lightblue'}}>
                <Grid>
                    <Row>
                        <Col xs={8}>
                            Whole protein calculator 
                        </Col>
                    
                        <Col xs={4} style={{fontSize: '40%'}}>
                            <NavigationBarContainer />
                        </Col>
                    </Row>

                </Grid>
            </PageHeader>
        );
    }
}

export {Header};