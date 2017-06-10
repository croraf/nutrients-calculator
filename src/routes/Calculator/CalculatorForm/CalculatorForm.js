import React from 'react';

import {reduxForm, FieldArray} from 'redux-form';
import {/*Checkbox, Radio, */Button, Grid, Row, Col} from 'react-bootstrap';

import {FieldComponent} from './FieldComponent';

import {NutrientRow} from './NutrientRow';

const renderNutrients = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    {fields.map((item, index) => (
        <NutrientRow key={index} item={item} nutrientName={item.nutrientName} quantity={item.quantity} />
    ))}
  </ul>
);

class CalculatorForm extends React.Component {

    render () {

        const {addNutrientHandler, handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Grid>

                    <FieldArray name='nutrients' component={renderNutrients} />

                    <Row>
                        <Button onClick={addNutrientHandler}>+ Add</Button>
                    </Row>

                </Grid>
                
            </form>
        );
    }

}

const initialValues = {
    nutrients: [{nutrientName: 'oat', quantity: 10}, {nutrientName: 'corn', quantity: 20}]
};

const CalculatorFormReduxWrapper = reduxForm({
    form: 'calculatorForm',
    destroyOnUnmount: true,
    initialValues: initialValues
})(CalculatorForm);

export {CalculatorFormReduxWrapper as CalculatorForm};