import React from 'react';
import PropTypes from 'prop-types';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

import Paper from 'material-ui/Paper';

/*import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import Subheader from 'material-ui/Subheader';*/
/*import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';*/

import {RightIconMenu} from './RightIconMenu';

class IngredientsList extends React.Component {
    render () {

        const {ingredients={}, deleteIngredient, editIngredient} = this.props;

        return (
            <Paper zDepth={2} style={{border: '1px solid black'}}>
                <h3 style={{textAlign: 'left', padding: '15px 0px 15px 20px', margin: 0}}>Available ingredients</h3>
                {/*<CardHeader title="List of available ingredients" />*/}
                {/*<Divider />*/}
                <List style={{border: '1px solid black', marginTop: '0px', height: '400px', overflowY: 'auto'}}>
                    {Object.keys(ingredients).map((key) => {
                        
                        {/*RightIconMenu(deleteIngredient, key)*/}
                        return (
                            <ListItem 
                                key={key}
                                primaryText={ingredients[key]}
                                leftIcon={<ContentInbox />}
                                rightIconButton={
                                    <RightIconMenu 
                                        deleteIngredient={deleteIngredient}
                                        editIngredient={editIngredient}
                                        elementKey={key}/>}/>
                        );
                    }).reverse()}
                </List>
            </Paper>
        );
    }
}

IngredientsList.propTypes = {
    ingredients: PropTypes.object,
    deleteIngredient: PropTypes.func.isRequired,
    editIngredient: PropTypes.func.isRequired
};


export {IngredientsList};