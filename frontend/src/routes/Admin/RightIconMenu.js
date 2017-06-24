import React from 'react';

import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import {/*grey400, */darkBlack/*, lightBlack*/} from 'material-ui/styles/colors';

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={darkBlack} />
    </IconButton>
);

class RightIconMenu extends React.Component {

    iconTouchTapHandler = (event, child) => {
        
        this.props.deleteIngredient(this.props.elementKey);
    }

    render () {

        // need to catch some properties, not to pass them further
        const {elementKey, deleteIngredient, ...props} = this.props;

        return (
            <IconMenu {...props} iconButtonElement={iconButtonElement} onItemTouchTap={this.iconTouchTapHandler}>
                <MenuItem>Edit</MenuItem>
                <MenuItem>Delete</MenuItem>
            </IconMenu>
        );
    }
}

/*const RightIconMenu = (deleteIngredient, elementKey) => {
    return (
        <IconMenu iconButtonElement={iconButtonElement} onItemTouchTap={() => {deleteIngredient(elementKey);}}>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
        </IconMenu>
    );  
};*/

export {RightIconMenu};