import React from 'react';
import {connect} from 'react-redux';

import TextField from 'material-ui/TextField';

import AutoComplete from 'material-ui/AutoComplete';

class FormControlWrapper extends React.Component {

    render () {

        const {input, meta, dataSource, label, placeholder, type, ...props} = this.props;

        return (
            <div>
                {/*AutoComplete if it is the ingredient name from control, rather than quantity*/}
                {input.name.match(/\.name$/) ?
                    
                    <AutoComplete
                        {...input}
                        dataSource={Object.values(dataSource)}
                        floatingLabelText={label}
                        fullWidth={true}
                        autoComplete="off" /> 
                    
                    : <TextField
                        {...input}
                        type={type}
                        floatingLabelText={label}
                        fullWidth={true}
                        autoComplete="off"
                        />
                }
                
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    /*fetchIngredientSuggestions: (value) => {dispatch(fetchIngredientSuggestions(value));}*/
});

const mapStateToProps = (state) => ({
    dataSource: state.ingredients.ingredients
});

const FormControlWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(FormControlWrapper);

export {FormControlWrapperContainer};