import { Field } from 'redux-form';
import FormControlWrapper from './FormControlWrapper';

const FieldComponent = ({ controlId, type, label }) => {

    return (
        <div>
            <Field
                name={controlId}
                component={FormControlWrapper}
                type={type}
                label={label}
            />
        </div>
    );
};


export { FieldComponent };
