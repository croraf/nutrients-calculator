import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';

import {NutrientRow} from './NutrientRow';

class NutrientsListComponent extends React.Component {
    
    render() {

        const {fields, meta: {error, submitFailed}} = this.props;
        return (
            <div>
                {fields.map((item, index) => (
                    <NutrientRow key={index} item={item} index={index} fields={fields} />
                ))}
                <Row>
                    <Col xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                        <Button type='button' onClick={() => fields.push({name: '', quantity: 0})}>+ Add nutrient</Button>
                        <Button type='submit'>Calculate</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export {NutrientsListComponent};