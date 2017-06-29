import React from 'react';
import PropTypes from 'prop-types';

import {Field} from 'redux-form';

import {FormControlWrapperContainer} from './FormControlWrapperContainer';

class FieldComponent extends React.Component {

    render () {
        
        const { controlId, type, label } = this.props;

        return (
            <div>
                <Field 
                    name={controlId}
                    component={FormControlWrapperContainer}
                    type={type}
                    label={label} />
            </div>
        );
    }

}

FieldComponent.propTypes = {
    controlId: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string
};


export {FieldComponent};