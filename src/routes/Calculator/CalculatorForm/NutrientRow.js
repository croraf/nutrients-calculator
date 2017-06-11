import React from 'react';

import {Row, Col} from 'react-bootstrap';
import {FieldComponent} from './FieldComponent';

class NutrientRow extends React.Component {
    render () {

        const {item, fields, index} = this.props;

        return (
            <Row>
                <Col xs={8}>
                    <FieldComponent
                        controlId={`${item}.name`}
                        type='text'
                        label='Nutrient name'
                        placeholder='Enter nutrient name'/>
                </Col>
                <Col xs={3}>
                    <FieldComponent
                        controlId={`${item}.quantity`}
                        type='text'
                        label='Serving size [g]'
                        placeholder='Enter serving size' />
                </Col>
                <Col xs={1} style={{display: 'flex'}}>
                    <button type='button' onClick={()=>{fields.remove(index);}}>Delete</button>
                </Col>
            </Row>
        );
    }
}

export {NutrientRow};