import React from 'react';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

class IngredientsList extends React.Component {
    render () {
        return (
            
            <List style={{border: '1px solid black', marginTop: '20px'}}>
                <ListItem primaryText="chockolate, milk" leftIcon={<ContentInbox />} />
                <ListItem primaryText="chockolate, dark" leftIcon={<ContentInbox />} />
                <ListItem primaryText="chockolate, white" leftIcon={<ActionGrade />} />
                <ListItem primaryText="chockolate milk, 1% fat" leftIcon={<ContentSend />} />
                <ListItem primaryText="chockolate milk, 3% fat" leftIcon={<ContentDrafts />} />
            </List>
        );
    }
}

export {IngredientsList};