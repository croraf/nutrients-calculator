import React from 'react';
import {connect} from 'react-redux';

import TextField from 'material-ui/TextField';

import {fetchIngredientSuggestions} from 'modules/fetchSuggestions';

import {SuggestionsBoxContainer} from './SuggestionsBoxContainer';

import AutoComplete from 'material-ui/AutoComplete';

class FormControlWrapper extends React.Component {

    /*onChangeHandler = (event) => {

        this.props.input.onChange(event);
        this.props.fetchIngredientSuggestions(event.target.value);
    }
    onFocusHandler = (event) => {

        this.props.input.onFocus(event);
        this.props.fetchIngredientSuggestions(event.target.value);
    }*/

    render () {

        //have to catch fetchIngredientSuggestions not to pass it to inner components 
        const {input, meta, /*fetchIngredientSuggestions,*/ placeholder, label, ...props} = this.props;

        return (
            <div>
                {/*Enhanced FormControl if it is the ingredient name control, rather than quantity*/}
                {/*<TextField
                        {...input}
                        {...props}
                        autoComplete="off"
                        floatingLabelText={label}
                        fullWidth={true}
                        onChange={this.onChangeHandler}
                        onFocus={this.onFocusHandler}
                        />*/}
                {input.name.match(/\.name$/) ?
                    
                    <AutoComplete
                        {...input}
                        {...props}
                        dataSource={['a', 'aab']}
                        
                        floatingLabelText={label}
                        fullWidth={true}
                        autoComplete="off" /> 
                    
                    : <TextField
                        {...input}
                        {...props}
                        
                        floatingLabelText={label}
                        fullWidth={true}
                        autoComplete="off"
                        />
                }
                
                {/*{meta.active && input.name.match(/\.name$/) && <SuggestionsBoxContainer />}*/}
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    /*fetchIngredientSuggestions: (value) => {dispatch(fetchIngredientSuggestions(value));}*/
});

const mapStateToProps = (state) => ({

});

const FormControlWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(FormControlWrapper);

export {FormControlWrapperContainer};