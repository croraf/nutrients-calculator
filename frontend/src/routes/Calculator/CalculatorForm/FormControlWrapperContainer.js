import React from 'react';
import {connect} from 'react-redux';
import {FormControl} from 'react-bootstrap';

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

        const {input, meta, fetchIngredientSuggestions, ...props} = this.props;

        return (
            <div>
                {/*Enhanced FormControl if it is the name of the ingredient, rather than quantity*/}
                {input.name.match(/\.name$/) ?
                    <FormControl {...input} onChange={this.onChangeHandler} onFocus={this.onFocusHandler} autoComplete="off" {...props} />
                    : <FormControl {...input} {...props} />
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