import React from 'react';

import {Row, Col} from 'react-bootstrap';
import {FieldComponent} from './FieldComponent';

class NutrientRow extends React.Component {
    render () {

        const {item} = this.props;

        return (
            <Row>
                <Col xs={8}>
                    <FieldComponent
                        controlId={`${item}.nutrientName`}
                        type='text'
                        label='Nutrient name'
                        placeholder='Enter text'/>
                </Col>
                <Col xs={4}>
                    <FieldComponent
                        controlId={`${item}.quantity`}
                        type='text'
                        label='Serving size'
                        placeholder='Enter text' />
                </Col>
            </Row>
        );
    }
}

export {NutrientRow};