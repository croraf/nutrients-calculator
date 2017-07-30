import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import TextField from 'material-ui/TextField';

import {MyAutosuggest} from './MyAutosuggest';

class FormControlWrapper extends React.Component {


    render () {

        const {input, meta, label, type, dataSource} = this.props;

        return (
            
            <div>
                {/*Autosuggest if it is the ingredient name from control, rather than quantity*/}
                {input.name.match(/\.name$/) ?
                    
                    <MyAutosuggest label={label} input={input} dataSource={dataSource}/>
                    
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

FormControlWrapper.propTypes = {
    // TODO: check if should be object or array, conceptually
    // TODO: check what to do with input and meta
    dataSource: PropTypes.object,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

///////////////////////////////////////////////////////////////////////////////////////////////

const mapDispatchToProps = (dispatch) => ({
    /*fetchIngredientSuggestions: (value) => {dispatch(fetchIngredientSuggestions(value));}*/
});

const mapStateToProps = (state) => ({
    dataSource: state.ingredients.ingredients
});

const FormControlWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(FormControlWrapper);

export {FormControlWrapperContainer};
