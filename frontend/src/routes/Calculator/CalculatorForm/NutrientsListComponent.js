import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import {NutrientRow} from './NutrientRow';

import {Row, Col, Grid} from 'react-flexbox-grid';

class NutrientsListComponent extends React.Component {
    
    render() {

        const {fields, meta: {error, submitFailed}} = this.props;
        return (
            <Grid>
                {fields.map((item, index) => (
                    <NutrientRow key={index} item={item} index={index} fields={fields} />
                ))}
                <Row style={{paddingTop: '10px'}}>
                    <Col xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                        <RaisedButton style={{marginLeft: '5px', marginRight: '5px', paddingLeft: '10px', paddingRight: '10px'}} type='button' onClick={() => fields.push({name: '', quantity: 0})}>+ Add ingredient</RaisedButton>
                        <RaisedButton style={{marginLeft: '5px', marginRight: '5px', paddingLeft: '10px', paddingRight: '10px'}} type='submit'>Calculate</RaisedButton>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export {NutrientsListComponent};