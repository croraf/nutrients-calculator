import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import { MyMenuContainer } from './MyMenuContainer';

class Header extends React.Component {
    render() {
        return (
            <>
                <AppBar position='static' style={{ padding: '0rem 1rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2>Whole protein calculator</h2>
                    <MyMenuContainer />
                </AppBar>
            </>
        );
    }
}

export { Header };
