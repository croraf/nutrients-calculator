import React from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

class MyMenu extends React.Component {
    render () {

        const {navigate, activeLink, ...props} = this.props;
        return (
            <IconMenu
                {...props}
                onItemTouchTap={navigate}
                iconButtonElement={
                    <IconButton>
                        <NavigationMenu key='3' style={{color: '#ffffff', fill: '#ffffff'}} />
                    </IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem primaryText="Calculator" value='/calculator' checked={activeLink === '/calculator'}/>
                <MenuItem primaryText="Admin" value='/admin' checked={activeLink === '/admin'}/>
                <MenuItem primaryText="Sign out" value='/signOut' checked={activeLink === '/signOut'} />
            </IconMenu>
        );
    }
}

export {MyMenu};