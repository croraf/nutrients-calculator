import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import {MyTargetContainer} from './MyTarget';
import {MySourceContainer} from './SourceList';

class PlaygroundComponent extends React.Component {
    render () {

        return (
            <div>
                <MyTargetContainer />
                <MySourceContainer />
            </div>
        );
    }
}

export const Playground = DragDropContext(HTML5Backend)(PlaygroundComponent);