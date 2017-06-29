import React from 'react';
import PropTypes from 'prop-types';

import {Row, Col} from 'react-flexbox-grid';
import {FieldComponent} from './FieldComponent';


class NutrientRow extends React.Component {
    render () {

        const {item, fields, index} = this.props;

        return (
            <div>
                <Row>
                    <Col xs={8}>
                        <FieldComponent
                            controlId={`${item}.name`}
                            type='text'
                            label='Ingredient name' />
                    </Col>
                    <Col xs={3}>
                        <FieldComponent
                            controlId={`${item}.quantity`}
                            type='number'
                            label='Serving size [g]' />
                    </Col>
                    <Col xs={1} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <i
                            className='material-icons'
                            onClick={()=>{fields.remove(index);}}
                            style={{cursor: 'pointer'}}>
                            delete_forever
                        </i>
                    </Col>
                </Row>
            </div>
        );
    }
}

NutrientRow.propTypes = {
    item: PropTypes.string.isRequired
};

export {NutrientRow};