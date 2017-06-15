import React from 'react';
import {connect} from 'react-redux';
import {FormControl} from 'react-bootstrap';

import {fetchIngredientSuggestions} from 'modules/fetchSuggestions';

import {SuggestionsBoxContainer} from './SuggestionsBoxContainer';

class FormControlWrapper extends React.Component {

    onChangeHandler = (value) => {
        this.props.input.onChange(value);
        this.props.fetchIngredientSuggestions(value);
    }

    render () {

        const {input, meta, fetchIngredientSuggestions, ...props} = this.props;

        return (
            <div>
                <FormControl {...input} onChange={this.onChangeHandler} {...props} />
                
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