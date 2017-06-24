import React from 'react';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';

import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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

        const {ingredients={}} = this.props;
        const ingredientsList = Object.values(ingredients);

        return (
            <Paper zDepth={2} style={{border: '1px solid black'}}>
                <h3 style={{textAlign: 'left', padding: '15px 0px 15px 20px', margin: 0}}>Available ingredients</h3>
                {/*<CardHeader title="List of available ingredients" />*/}
                {/*<Divider />*/}
                <List style={{border: '1px solid black', marginTop: '0px', height: '400px', overflowY: 'auto'}}>
                    {ingredientsList.map((item) => 
                        <ListItem key={item} primaryText={item} leftIcon={<ContentInbox />} rightIconButton={rightIconMenu}/>
                    ).reverse()}
                </List>
            </Paper>
        );
    }
}

export {IngredientsList};