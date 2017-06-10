import React from 'react';

import {Nav, NavItem, Col} from 'react-bootstrap';

class NavigationBar extends React.Component {
    render () {
        return (
            <Nav bsStyle="pills" activeKey={this.props.activeLink} onSelect={this.props.navigate} style={{position: 'absolute', right: '10%'}}>
                {/*<NavItem eventKey='/main'>Calculator</NavItem>*/}
                <NavItem eventKey='/calculator' title='Calculator'>Calculator</NavItem>
                <NavItem eventKey='/admin' title='Reports'>Admin</NavItem>
            </Nav>
        );
    }
}

export {NavigationBar};