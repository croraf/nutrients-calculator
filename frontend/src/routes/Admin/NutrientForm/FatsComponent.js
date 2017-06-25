import React from 'react';

import {Row, Col} from 'react-flexbox-grid';

import {FieldComponent} from './FieldComponent';

class FatsComponent extends React.Component {
    render () {
        return (
            <Row>
                <Col xs={3}>
                    <FieldComponent
                        controlId='Fats'
                        type='number'
                        label='Fats'
                        placeholder='Enter text' />
                </Col>
                <Col xs={9}>
                    <Row>
                        <Col xs={4}>

                            <FieldComponent
                                controlId='Sat'
                                type='number'
                                label='Sat'
                                placeholder='Enter text' />
                        </Col>
                        <Col xs={4}>
                            <FieldComponent
                                controlId='Polyuns'
                                type='number'
                                label='Polyuns'
                                placeholder='Enter text' />
                        </Col>

                        <Col xs={4}>

                            <FieldComponent
                                controlId='Monouns'
                                type='number'
                                label='Monouns'
                                placeholder='Enter text' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export {FatsComponent};