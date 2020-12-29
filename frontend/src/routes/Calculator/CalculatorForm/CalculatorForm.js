import { reduxForm, FieldArray } from 'redux-form';
import { NutrientsListComponent } from './NutrientsListComponent';

const CalculatorForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}>
            <FieldArray name='nutrients' component={NutrientsListComponent} />
        </form>
    );
};

////////////////////////////////////////////////////////////////////////////////////////

const initialValues = {
    nutrients: [{/*name: 'oat leafs', quantity: 50*/ }, {/*name: 'Cornflex', quantity: 100*/ }, {/*name: 'chockolate, dark', quantity: 150*/ }]
};

const CalculatorFormReduxWrapper = reduxForm({
    form: 'calculatorForm',
    destroyOnUnmount: false,
    initialValues: initialValues
})(CalculatorForm);

export { CalculatorFormReduxWrapper as CalculatorForm };
