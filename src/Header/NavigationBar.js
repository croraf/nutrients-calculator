import React from 'react';

import {Nav, NavItem, Col} from 'react-bootstrap';

class NavigationBar extends React.Component {
    render () {
        return (
            <Nav bsStyle="pills" activeKey={this.props.activeLink} onSelect={this.props.navigate} style={{position: 'absolute', right: '10%'}}>
                <NavItem eventKey='/tests'>Tests</NavItem>
                <NavItem eventKey='/playground' title='Reports'>playground</NavItem>
                <NavItem eventKey='/settings'>Settings</NavItem>
            </Nav>
        );
    }
}

export {NavigationBar};