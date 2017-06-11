import React from 'react';

import {reduxForm, FieldArray} from 'redux-form';
import {/*Checkbox, Radio, */Button, Grid, Row, Col} from 'react-bootstrap';

import {FieldComponent} from './FieldComponent';

import {NutrientRow} from './NutrientRow';

class NutrientsListComponent extends React.Component {
    
    render() {

        const {fields, meta: {error, submitFailed}} = this.props;
        return (
            <div>
                {fields.map((item, index) => (
                    <NutrientRow key={index} item={item} index={index} fields={fields} />
                ))}

                <Row>
                    <Col xs={12}>
                        <Button type='button' onClick={() => fields.push({})}>+ Add</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

class CalculatorForm extends React.Component {

    render () {

        const {addNutrientHandler, handleSubmit} = this.props;
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
    nutrients: [{name: 'rafa', quantity: 10}]
};

const CalculatorFormReduxWrapper = reduxForm({
    form: 'calculatorForm',
    destroyOnUnmount: true,
    initialValues: initialValues
})(CalculatorForm);

export {CalculatorFormReduxWrapper as CalculatorForm};