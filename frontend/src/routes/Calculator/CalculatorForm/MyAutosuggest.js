import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import Autosuggest from 'react-autosuggest';

import styles from './myAutosuggest.css';

class MyAutosuggest extends React.Component {

    constructor() {
        super();

        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            suggestions: []
        };
    }

    getSuggestionValue = suggestion => suggestion

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength <= 2 ? [] : this.props.dataSource.map(food => food.name).filter(ingredient =>
            ingredient.toLowerCase().slice(0, inputLength) === inputValue
        );
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    }

    onSuggestionSelected = (event, suggestion) => {
        this.props.input.onChange(suggestion.suggestion);
    }

    renderSuggestion = suggestion => (
        <div style={{
            width: '100%',
            padding: '5px',
            paddingTop: '10px',
            paddingBottom: '10px',
            cursor: 'pointer'
        }}>
            {suggestion}
        </div>
    )

    renderInputComponent = (input) => {
        return (
            <TextField
                {...input}
                fullWidth={true}
                autoComplete="off"

                style={{ position: 'relative' }}
            />
        );
    }

    renderSuggestionsContainer = ({ containerProps, children, query }) => {
        return (
            children &&
            <div {...containerProps} style={{
                border: '1px solid black',
                position: 'absolute',
                top: '70px',
                backgroundColor: 'white',
                zIndex: 100,
                width: '100%',
                maxHeight: 500,
                overflowY: 'auto',
                overflowX: 'hidden'
            }}>
                {children}
                {/*<div>
                    Press Enter to search <strong>{query}</strong>
                </div>*/}
            </div>
        );
    }

    render() {

        const { label, input } = this.props;

        return (
            <Autosuggest
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestions}
                renderSuggestion={this.renderSuggestion}
                onSuggestionSelected={this.onSuggestionSelected}
                inputProps={{
                    floatingLabelText: label,
                    ...input
                }}
                renderInputComponent={this.renderInputComponent}
                renderSuggestionsContainer={this.renderSuggestionsContainer}
            />
        );
    }
}

export { MyAutosuggest };
