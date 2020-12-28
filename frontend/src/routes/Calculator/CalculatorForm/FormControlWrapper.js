import React from 'react';
import { useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';

import { MyAutosuggest } from './MyAutosuggest';


const FormControlWrapper = ({ input, meta, label, type, }) => {

    const dataSource = useSelector(state => state.ingredients.ingredients);

    return (
        <div>
            {/*Autosuggest if it is the ingredient name from control, rather than quantity*/}
            {input.name.match(/\.name$/) ?

                <MyAutosuggest label={label} input={input} dataSource={dataSource} />

                : <TextField
                    {...input}
                    type={type}
                    label={label}
                    fullWidth={true}
                    autoComplete="off"
                />
            }
        </div>
    );
};

export default FormControlWrapper;
