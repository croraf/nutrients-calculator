import React from 'react';

import {reduxForm, FieldArray} from 'redux-form';
import {/*Checkbox, Radio, */Grid} from 'react-bootstrap';

import {NutrientsListComponent} from './NutrientsListComponent';

class CalculatorForm extends React.Component {

    render () {

        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Grid>
                    <FieldArray name='nutrients' component={NutrientsListComponent} />
                </Grid>
                
            </form>
        );
    }

}

const initialValues = {
    nutrients: [{name: 'rafa', quantity: 10}, {}, {}]
};

const CalculatorFormReduxWrapper = reduxForm({
    form: 'calculatorForm',
    destroyOnUnmount: true,
    initialValues: initialValues
})(CalculatorForm);

export {CalculatorFormReduxWrapper as CalculatorForm};