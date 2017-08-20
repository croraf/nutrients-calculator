import React from 'react';

/*import {menuItemActive} from './headerStyle.scss';*/

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
/*import ActionLabel from 'material-ui/svg-icons/action/label';*/

import {white} from 'material-ui/styles/colors';

const styleActive = {
    border: '1px solid lightseagreen',
    textAlign: 'center'
};
const styleInactive = {
    textAlign: 'center'
};

class MyMenu extends React.Component {
    render () {

        const {navigate, activeLink, username, ...props} = this.props;

        if (username === '') return <div />;

        return (
            <div>
                {/* TODO verticalAlign hack!*/}
                <span style={{verticalAlign: 'super', color: 'white'}}>Hi {username}!</span>

                <IconMenu
                    {...props}
                    onItemTouchTap={navigate}
                    iconButtonElement={
                        <IconButton iconStyle={{color: 'white'}}>
                            <NavigationMenu />
                        </IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    touchTapCloseDelay={300}
                >
                    <MenuItem primaryText="Calculator" value='/calculator' style={activeLink === '/calculator' ? styleActive: styleInactive}/>
                    {/* <MenuItem primaryText="Admin" value='/admin' style={activeLink === '/admin' ? styleActive: styleInactive}/> */}
                    <MenuItem primaryText="Log out" value='/login' style={activeLink === '/login' ? styleActive: styleInactive}/>
                </IconMenu>
            </div>
        );
    }
}

export {MyMenu};
