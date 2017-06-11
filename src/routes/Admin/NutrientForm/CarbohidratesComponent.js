import React from 'react';
import {Row, Col} from 'react-bootstrap';

import {FieldComponent} from './FieldComponent';

class CarbohidratesComponent extends React.Component {
    render () {
        return (
            <Row>
                <Col xs={3}>
                    <FieldComponent
                        controlId='Carbohidrates'
                        type='text'
                        label='Carbohidrates'
                        placeholder='Enter text' />
                </Col>
                <Col xs={9}>
                    <Col xs={4}>

                        <FieldComponent
                            controlId='AA1'
                            type='text'
                            label='AA1'
                            placeholder='Enter text' />
                    </Col>
                    <Col xs={4}>
                        <FieldComponent
                            controlId='AA1'
                            type='text'
                            label='AA1'
                            placeholder='Enter text' />
                    </Col>
                </Col>
            </Row>
        );
    }
}

export {CarbohidratesComponent};