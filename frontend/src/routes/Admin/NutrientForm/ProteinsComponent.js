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
                        type='text'
                        label='Proteins'
                        placeholder='Enter text' />
                </Col>
                <Col xs={9}>
                    <Row>
                        <Col xs={4}>

                            <FieldComponent
                                controlId='AA1'
                                type='text'
                                label='AA1'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA2'
                                type='text'
                                label='AA2'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA3'
                                type='text'
                                label='AA3'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA4'
                                type='text'
                                label='AA4'
                                placeholder='Enter text' />
                        </Col>
                        <Col xs={4}>
                            <FieldComponent
                                controlId='AA1'
                                type='text'
                                label='AA1'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA2'
                                type='text'
                                label='AA2'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA3'
                                type='text'
                                label='AA3'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA4'
                                type='text'
                                label='AA4'
                                placeholder='Enter text' />
                        </Col>

                        <Col xs={4}>

                            <FieldComponent
                                controlId='AA1'
                                type='text'
                                label='AA1'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA2'
                                type='text'
                                label='AA2'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA3'
                                type='text'
                                label='AA3'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA4'
                                type='text'
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