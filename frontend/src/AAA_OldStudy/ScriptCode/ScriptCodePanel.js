import React from 'react';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import mainStyles from 'styles/mainStyles.css';

import {Row, Panel} from 'react-bootstrap';

import {ScriptCodeHeaderContainer} from './ScriptCodeHeaderContainer';
import {ScriptCodeInputContainer} from './ScriptCodeInputContainer';

class ScriptCodePanel extends React.Component {

    constructor () {
        super();
        this.state = {expanded: false};
    }
    handleExpand = () => {
        this.setState({expanded: !this.state.expanded});
    };

    render() {
        
        return (
            <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>

                <Panel
                    className={'att-panel ' + (this.state.expanded ? 'expanded' : '')}
                    header={<ScriptCodeHeaderContainer onClick={this.handleExpand}/>}>
                    
                    <ScriptCodeInputContainer />
                </Panel>
        
            </CSSTransitionGroup>
                
        );
    }
}

export {ScriptCodePanel};