import React from 'react';
import PropTypes from 'prop-types';

import {reduxForm, FieldArray} from 'redux-form';


import {NutrientsListComponent} from './NutrientsListComponent';

class CalculatorForm extends React.Component {

    render () {

        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <FieldArray name='nutrients' component={NutrientsListComponent} />
            </form>
        );
    }

}

CalculatorForm.propTypes = {
    handleSubmit: PropTypes.func
};


////////////////////////////////////////////////////////////////////////////////////////

const initialValues = {
    nutrients: [{/*name: 'oat leafs', quantity: 50*/}, {/*name: 'Cornflex', quantity: 100*/}, {/*name: 'chockolate, dark', quantity: 150*/}]
};

const CalculatorFormReduxWrapper = reduxForm({
    form: 'calculatorForm',
    destroyOnUnmount: true,
    initialValues: initialValues
})(CalculatorForm);


CalculatorFormReduxWrapper.propTypes = {
    onSubmit: PropTypes.func
};

export {CalculatorFormReduxWrapper as CalculatorForm};
