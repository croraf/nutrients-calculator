import React from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
/*import ActionLabel from 'material-ui/svg-icons/action/label';*/

import {white} from 'material-ui/styles/colors';

class MyMenu extends React.Component {
    render () {

        const {navigate, activeLink, username, ...props} = this.props;
        return (
            <div>
                {/* TODO verticalAlign hack!*/}
                {username ? <span style={{verticalAlign: 'super', color: 'white'}}>Hi {username}!</span> : undefined}

                <IconMenu
                    {...props}
                    onItemTouchTap={navigate}
                    iconButtonElement={
                        <IconButton>
                            <NavigationMenu color={white} />
                        </IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    touchTapCloseDelay={300}
                >
                    <MenuItem primaryText="Calculator" value='/calculator' style={activeLink === '/calculator' ? {border: '1px solid lightseagreen'} : undefined}/>
                    <MenuItem primaryText="Admin" value='/admin' style={activeLink === '/admin' ? {border: '1px solid lightseagreen'} : undefined}/>
                    <MenuItem primaryText="Sign out" value='/login' style={activeLink === '/login' ? {border: '1px solid lightseagreen'} : undefined}/>
                </IconMenu>
            </div>
        );
    }
}

export {MyMenu};