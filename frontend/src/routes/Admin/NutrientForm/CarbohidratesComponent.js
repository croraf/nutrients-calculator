import React from 'react';

import {Row, Col} from 'react-flexbox-grid';

import {FieldComponent} from './FieldComponent';

class CarbohidratesComponent extends React.Component {
    render () {
        return (
            <Row>
                <Col xs={3}>
                    <FieldComponent
                        controlId='Carbohidrates'
                        type='number'
                        label='Carbohidrates'
                        placeholder='Enter text' />
                </Col>
                <Col xs={9}>
                    <Row>
                        <Col xs={4}>

                            <FieldComponent
                                controlId='Fiber'
                                type='number'
                                label='Fiber'
                                placeholder='Enter text' />
                        </Col>
                        <Col xs={4}>
                            <FieldComponent
                                controlId='Sugar'
                                type='number'
                                label='Sugar'
                                placeholder='Enter text' />
                        </Col>

                        {/*<Col xs={4}>

                            <FieldComponent
                                controlId='AA1'
                                type='number'
                                label='AA1'
                                placeholder='Enter text' />
                        </Col>*/}
                    </Row>
                </Col>
            </Row>
        );
    }
}

export {CarbohidratesComponent};