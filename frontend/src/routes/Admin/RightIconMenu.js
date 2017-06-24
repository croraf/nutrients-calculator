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

    editHandler = () => {
        this.props.editIngredient(this.props.elementKey);
    }

    deleteHandler = () => {
        this.props.deleteIngredient(this.props.elementKey);
    }

    render () {

        // need to catch some properties, not to pass them further
        const {elementKey, deleteIngredient, editIngredient, ...props} = this.props;

        return (
            <IconMenu {...props} iconButtonElement={iconButtonElement}>
                <MenuItem onTouchTap={this.editHandler}>Edit</MenuItem>
                <MenuItem onTouchTap={this.deleteHandler}>Delete</MenuItem>
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