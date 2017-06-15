import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import {ScriptCodePanel} from './ScriptCode/ScriptCodePanel';
import {TestHierarchyContainer} from './Hierarchy/TestHierarchyContainer';


class Main extends React.Component {
    render () {
        return (
            <Grid>
                <Row>
                    <Col xs={4}><TestHierarchyContainer /></Col>
                    <Col xs={8}><ScriptCodePanel /></Col>
                </Row>
            </Grid>
            
        );
    }
}

export {Main};