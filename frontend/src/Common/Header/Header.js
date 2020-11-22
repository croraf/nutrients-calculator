import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import { MyMenuContainer } from './MyMenuContainer';

class Header extends React.Component {
    render() {
        return (
            <AppBar style={{ padding: '0rem 1rem' }}>
                <h2>Whole protein calculator</h2>
                <MyMenuContainer />
            </AppBar>
        );
    }
}

export { Header };
