import React from 'react';
import {connect} from 'react-redux';

import TextField from 'material-ui/TextField';

import {fetchIngredientSuggestions} from 'modules/fetchSuggestions';

import {SuggestionsBoxContainer} from './SuggestionsBoxContainer';

class FormControlWrapper extends React.Component {

    onChangeHandler = (event) => {

        this.props.input.onChange(event);
        this.props.fetchIngredientSuggestions(event.target.value);
    }
    onFocusHandler = (event) => {

        this.props.input.onFocus(event);
        this.props.fetchIngredientSuggestions(event.target.value);
    }

    render () {

        //have to catch fetchIngredientSuggestions not to pass it to inner components 
        const {input, meta, fetchIngredientSuggestions, placeholder, label, ...props} = this.props;

        return (
            <div>
                {/*Enhanced FormControl if it is the ingredient name control, rather than quantity*/}
                {input.name.match(/\.name$/) ?
                    <TextField
                        {...input}
                        {...props}
                        floatingLabelText={label}
                        fullWidth={true}
                        onChange={this.onChangeHandler}
                        onFocus={this.onFocusHandler}
                        />
                    : <TextField
                        {...input}
                        {...props}
                        floatingLabelText={label}
                        fullWidth={true}
                        />
                }
                
                {meta.active && input.name.match(/\.name$/) && <SuggestionsBoxContainer />}
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    fetchIngredientSuggestions: (value) => {dispatch(fetchIngredientSuggestions(value));}
});

const mapStateToProps = (state) => ({

});

const FormControlWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(FormControlWrapper);

export {FormControlWrapperContainer};