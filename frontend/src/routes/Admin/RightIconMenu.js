import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color='black' />
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
            <Menu {...props} iconButtonElement={iconButtonElement}>
                <MenuItem onTouchTap={this.editHandler}>Edit</MenuItem>
                <MenuItem onTouchTap={this.deleteHandler}>Delete</MenuItem>
            </Menu>
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

RightIconMenu.propTypes = {
    // TODO: check for other properties
    editIngredient: PropTypes.func.isRequired,
    deleteIngredient: PropTypes.func.isRequired,
    elementKey: PropTypes.string.isRequired
};


export {RightIconMenu};
