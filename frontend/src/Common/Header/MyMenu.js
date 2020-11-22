import React from 'react';

/*import {menuItemActive} from './headerStyle.scss';*/

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import NavigationMenu from '@material-ui/icons/Menu';
/*import ActionLabel from '@material-ui/icons/action/label';*/

const styleActive = {
    border: '1px solid lightseagreen',
    textAlign: 'center'
};
const styleInactive = {
    textAlign: 'center'
};

class MyMenu extends React.Component {
    render() {

        const { navigate, activeLink, username, ...props } = this.props;

        if (username === '') return <div />;
        /* if (!localStorage.getItem('wholeprotein_token')) return <div />; */

        return (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {/* TODO verticalAlign hack!*/}
                <span style={{ verticalAlign: 'super', color: 'white' }}>Hi {username}!</span>

                <Menu
                    {...props}
                    onItemTouchTap={navigate}
                    iconButtonElement={
                        <IconButton iconStyle={{ color: 'white' }}>
                            <NavigationMenu />
                        </IconButton>
                    }
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    touchTapCloseDelay={300}
                >
                    <MenuItem primaryText="Profile" value='/profile' style={activeLink === '/profile' ? styleActive : styleInactive} />
                    <MenuItem primaryText="Calendar" value='/calendar' style={activeLink === '/calendar' ? styleActive : styleInactive} />
                    <MenuItem primaryText="Calculator" value='/calculator' style={activeLink === '/calculator' ? styleActive : styleInactive} />
                    {/* <MenuItem primaryText="Admin" value='/admin' style={activeLink === '/admin' ? styleActive: styleInactive}/> */}
                    <MenuItem primaryText="Statistics" value='/statistics' style={activeLink === '/statistics' ? styleActive : styleInactive} />
                    <MenuItem primaryText="Log out" value='/login' style={activeLink === '/login' ? styleActive : styleInactive} />
                </Menu>
            </div>
        );
    }
}

export { MyMenu };
