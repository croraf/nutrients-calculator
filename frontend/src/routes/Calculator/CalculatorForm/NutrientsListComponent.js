import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { NutrientRow } from './NutrientRow';


const calculateButtonStyle = {
    marginLeft: '5px',
    marginRight: '5px',
};

const NutrientsListComponent = ({ fields }) => {
    return (
        <>
            {fields.map((item, index) => (
                <NutrientRow key={index} item={item} index={index} fields={fields} />
            ))}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0px' }}>
                <Button variant='outlined' color='primary' style={calculateButtonStyle} type='button' onClick={() => fields.push({ name: undefined, quantity: undefined })}>
                    + Add ingredient
                </Button>
                <Button variant='outlined' color='secondary' style={calculateButtonStyle} type='submit'>
                    Calculate
                </Button>
            </div>
        </>
    );
};

NutrientsListComponent.propTypes = {
    fields: PropTypes.shape({
        map: PropTypes.func.isRequired
    }).isRequired,
    meta: PropTypes.object
};

export { NutrientsListComponent };
