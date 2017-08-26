
import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-flexbox-grid';

import ProfileForm from './ProfileForm';

class Profile extends React.Component {
    render () {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} xsOffset={0} md={8} mdOffset={2} lg={6} lgOffset={3}>
                
                        <div style={{position: 'relative',
                            marginTop: '10px', marginBottom: '10px', border: '2px solid black',
                            borderRadius: '5px', borderColor: 'rgb(0, 188, 212)'}} >
                            
                            <h2 style={{textAlign: 'center', color: 'rgb(0, 188, 212)'}}>
                                My Profile
                            </h2>
                            
                            <div style={{position: 'relative', width: '90%', margin: 'auto'}}>

                                <ProfileForm onSubmit={(values) => {console.log(values);}} />

                            </div>
                        </div>
                    
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export {Profile};
