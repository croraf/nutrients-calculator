import React from 'react';
import PropTypes from 'prop-types';
import { FieldComponent } from './FieldComponent';
import DeleteForever from '@material-ui/icons/DeleteForever';

class NutrientRow extends React.Component {
    render() {

        const { item, fields, index } = this.props;

        return (
            <div style={{ display: 'flex', alignItems: 'flex-end', margin: '0.5rem 0rem' }}>
                <div style={{ flexGrow: 2, margin: '0rem 0.5rem' }}>
                    <FieldComponent
                        controlId={`${item}.name`}
                        type='text'
                        label='Ingredient name' />
                </div>
                <div style={{ margin: '0rem 0.5rem' }}>
                    <FieldComponent
                        controlId={`${item}.quantity`}
                        type='number'
                        label='Serving size [g]' />
                </div>
                <div style={{ width: 'fit-content', margin: '0rem 0.5rem' }}>
                    <DeleteForever onClick={() => { fields.remove(index); }} style={{ cursor: 'pointer' }} />
                </div>
            </div>
        );
    }
}

NutrientRow.propTypes = {
    item: PropTypes.string.isRequired
};

export { NutrientRow };
