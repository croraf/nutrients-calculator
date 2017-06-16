import React from 'react';

// import {Nav, NavItem} from 'react-bootstrap';

/*import {Navbar, NavItem} from 'react-materialize';*/

class NavigationBar extends React.Component {
    render () {
        return (
            <div>
                {/*<Navbar brand='Whole protein calculator' right>
                    <NavItem onClick={() => {this.props.navigate('/calculator');}}>Calculator</NavItem>
                    <NavItem onClick={() => {this.props.navigate('/admin');}}>Admin</NavItem>
                </Navbar>*/}

                {/*<Nav bsStyle="pills" activeKey={this.props.activeLink} onSelect={this.props.navigate} style={{position: 'absolute', right: '10%'}}>

                <NavItem eventKey='/calculator' title='Calculator'>Calculator</NavItem>
                <NavItem eventKey='/admin' title='Reports'>Admin</NavItem>
                </Nav>*/}
            </div>

            
        );
    }
}

export {NavigationBar};