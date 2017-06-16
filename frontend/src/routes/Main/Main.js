import React from 'react';
import {Grid, Row, Col} from 'react-materialize';

import {ScriptCodePanel} from './ScriptCode/ScriptCodePanel';
import {TestHierarchyContainer} from './Hierarchy/TestHierarchyContainer';


class Main extends React.Component {
    render () {
        return (
            <Grid>
                <Row>
                    <Col s={4}><TestHierarchyContainer /></Col>
                    <Col s={8}><ScriptCodePanel /></Col>
                </Row>
            </Grid>
            
        );
    }
}

export {Main};