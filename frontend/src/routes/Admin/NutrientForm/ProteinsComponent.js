import React from 'react';

import {Row, Col} from 'react-flexbox-grid';

import {FieldComponent} from './FieldComponent';

class ProteinsComponent extends React.Component {
    render () {
        return (
            <Row>
                <Col xs={3}>
                    <FieldComponent
                        controlId='Proteins'
                        type='number'
                        label='Proteins'
                        placeholder='Enter text' />
                </Col>
                <Col xs={9}>
                    <Row>
                        <Col xs={4}>

                            <FieldComponent
                                controlId='AA1'
                                type='number'
                                label='AA1'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA2'
                                type='number'
                                label='AA2'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA3'
                                type='number'
                                label='AA3'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA4'
                                type='number'
                                label='AA4'
                                placeholder='Enter text' />
                        </Col>
                        <Col xs={4}>
                            <FieldComponent
                                controlId='AA1'
                                type='number'
                                label='AA1'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA2'
                                type='number'
                                label='AA2'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA3'
                                type='number'
                                label='AA3'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA4'
                                type='number'
                                label='AA4'
                                placeholder='Enter text' />
                        </Col>

                        <Col xs={4}>

                            <FieldComponent
                                controlId='AA1'
                                type='number'
                                label='AA1'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA2'
                                type='number'
                                label='AA2'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA3'
                                type='number'
                                label='AA3'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA4'
                                type='number'
                                label='AA4'
                                placeholder='Enter text' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export {ProteinsComponent};