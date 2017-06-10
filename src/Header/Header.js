import React from 'react';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';

import {NavigationBarContainer} from './NavigationBarContainer';

class Header extends React.Component {
    render () {
        return (
            
            <PageHeader style={{marginTop: '0px', paddingTop: '20px', paddingBottom: '20px', backgroundColor: 'lightblue'}}>
                <Grid>
                    <Row>
                        <Col xs={6}>
                            Whole protein calculator 
                        </Col>
                    
                        <Col xs={6} style={{fontSize: '40%'}}>
                            <NavigationBarContainer />
                        </Col>
                    </Row>

                </Grid>
            </PageHeader>
        );
    }
}

export {Header};