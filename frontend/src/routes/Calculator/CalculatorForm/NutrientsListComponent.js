import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

import {NutrientRow} from './NutrientRow';

import {Row, Col} from 'react-flexbox-grid';

const calculateButtonStyle = {
    marginLeft: '5px',
    marginRight: '5px',/*
    paddingLeft: '10px',
    paddingRight: '10px'*/
};

class NutrientsListComponent extends React.Component {
    
    render() {

        const {fields, meta: {error, submitFailed}} = this.props;
        return (
            <div style={{paddingLeft: '2%', paddingRight: '0px'}}>
                {fields.map((item, index) => (
                    <NutrientRow key={index} item={item} index={index} fields={fields} />
                ))}
                <Row style={{paddingTop: '10px'}}>
                    <Col xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                        <RaisedButton label='+ Add ingredient'  labelColor='white' primary={true} style={calculateButtonStyle} type='button' onTouchTap={() => fields.push({name: undefined, quantity: undefined})} />
                        <RaisedButton label='Calculate' labelColor='white' secondary={true} style={calculateButtonStyle} type='submit' />
                    </Col>
                </Row>
            </div>
        );
    }
}

NutrientsListComponent.propTypes = {
    fields: PropTypes.shape({
        map: PropTypes.func.isRequired
    }).isRequired,
    meta: PropTypes.object
};

export {NutrientsListComponent};
