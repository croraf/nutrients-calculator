import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { FieldComponent } from './FieldComponent';
import DeleteForever from '@material-ui/icons/DeleteForever'

class NutrientRow extends React.Component {
    render() {

        const { item, fields, index } = this.props;

        return (
            <Grid container spacing={2} style={{ alignItems: 'center', margin: '1rem 0rem' }}>
                <Grid item xs={8}>
                    <FieldComponent
                        controlId={`${item}.name`}
                        type='text'
                        label='Ingredient name' />
                </Grid>
                <Grid item xs={3}>
                    <FieldComponent
                        controlId={`${item}.quantity`}
                        type='number'
                        label='Serving size [g]' />
                </Grid>
                <Grid item xs={1}>
                    <DeleteForever onClick={() => { fields.remove(index); }} style={{ cursor: 'pointer' }} />
                </Grid>
            </Grid>
        );
    }
}

NutrientRow.propTypes = {
    item: PropTypes.string.isRequired
};

export { NutrientRow };
