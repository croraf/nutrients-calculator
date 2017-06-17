import React from 'react';

import AppBar from 'material-ui/AppBar';
import {MyMenuContainer} from './MyMenuContainer';

class Header extends React.Component {
    render () {
        return (
            <div>
                <AppBar
                    title="Whole protein calculator"
                    iconElementRight={<MyMenuContainer />}
                    iconElementLeft={<div />}
                />
            </div>
        );
    }
}

export {Header};