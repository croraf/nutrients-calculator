import React from 'react';

/*import {menuItemActive} from './headerStyle.scss';*/

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import NavigationMenu from '@material-ui/icons/Menu';
/*import ActionLabel from '@material-ui/icons/action/label';*/

const styleActive = {
    border: '1px solid #3f51b5',
    textAlign: 'center'
};
const styleInactive = {
    textAlign: 'center'
};

const MyMenu = ({ navigate, activeLink, username, }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if (username === '') return <div />;

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', color: 'white' }}>
            {/* TODO verticalAlign hack!*/}
            <span style={{ verticalAlign: 'super', color: 'white' }}>Hi {username}!</span>

            <IconButton onClick={handleClick}>
                <NavigationMenu style={{ color: 'white' }} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { handleClose(); navigate('/profile'); }} style={activeLink === '/profile' ? styleActive : styleInactive}>Profile</MenuItem>
                <MenuItem onClick={() => { handleClose(); navigate('/calendar'); }} style={activeLink === '/calendar' ? styleActive : styleInactive}>Calendar</MenuItem>
                <MenuItem onClick={() => { handleClose(); navigate('/calculator'); }} style={activeLink === '/calculator' ? styleActive : styleInactive}>Calculator</MenuItem>
                {/* <MenuItem onClick={() => {handleClose(); navigate('/admin'); }} style={activeLink === '/admin' ? styleActive: styleInactive}>Admin</MenuItem> */}
                <MenuItem onClick={() => { handleClose(); navigate('/statistics'); }} style={activeLink === '/statistics' ? styleActive : styleInactive}>Statistics</MenuItem>
                <MenuItem onClick={() => { handleClose(); navigate('/login'); }} style={activeLink === '/login' ? styleActive : styleInactive}>Log out</MenuItem>
            </Menu>
        </div>
    );
};

export { MyMenu };
