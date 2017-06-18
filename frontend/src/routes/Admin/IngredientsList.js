import React from 'react';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionDelete from 'material-ui/svg-icons/action/delete';

import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={darkBlack} />
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);

class IngredientsList extends React.Component {
    render () {

        const {ingredientsList=[]} = this.props;

        return (
            
            <List style={{border: '1px solid black', marginTop: '10px', height: '400px', overflowY: 'auto'}}>
                {ingredientsList.map((item) => 
                    <ListItem key={item} primaryText={item} leftIcon={<ContentInbox />} rightIconButton={rightIconMenu}/>
                )}
                {/*<ListItem primaryText="chockolate, milk" leftIcon={<ContentInbox />} rightIconButton={rightIconMenu}/>
                <ListItem primaryText="chockolate, dark" leftIcon={<ContentInbox />} rightIconButton={rightIconMenu}/>
                <ListItem primaryText="chockolate, white" leftIcon={<ActionGrade />} rightIconButton={rightIconMenu}/>
                <ListItem primaryText="chockolate milk, 1% fat" leftIcon={<ContentSend />} rightIconButton={rightIconMenu}/>
                <ListItem primaryText="chockolate milk, 3% fat" leftIcon={<ContentDrafts />} rightIconButton={rightIconMenu}/>
                <ListItem primaryText="chockolate, white" leftIcon={<ActionGrade />} rightIconButton={rightIconMenu}/>
                <ListItem primaryText="chockolate milk, 1% fat" leftIcon={<ContentSend />} rightIconButton={rightIconMenu}/>
                <ListItem primaryText="chockolate milk, 3% fat" leftIcon={<ContentDrafts />} rightIconButton={rightIconMenu}/>
                <ListItem primaryText="chockolate milk, 3% fat" leftIcon={<ContentDrafts />} rightIconButton={rightIconMenu}/>
                <ListItem primaryText="chockolate, white" leftIcon={<ActionGrade />} rightIconButton={rightIconMenu}/>
                <ListItem primaryText="chockolate milk, 1% fat" leftIcon={<ContentSend />} rightIconButton={rightIconMenu}/>
                <ListItem primaryText="chockolate milk, 3% fat" leftIcon={<ContentDrafts />} rightIconButton={rightIconMenu}/>*/}
            </List>
        );
    }
}

export {IngredientsList};