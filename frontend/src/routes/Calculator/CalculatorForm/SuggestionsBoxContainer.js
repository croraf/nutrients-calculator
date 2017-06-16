import React from 'react';

import {connect} from 'react-redux';

class SuggestionsBox extends React.Component {
    render () {

        const {suggestions} = this.props;

        return (
            <div style={{position: 'absolute', border: '1px solid black', zIndex: 100, backgroundColor: 'white', marginRight: '15px'}}>
                {suggestions.map((item, index) => (<div key={index} style={{padding: '5px'}}>{item}</div>))}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    suggestions:  state.suggestions.list
});

const SuggestionsBoxContainer = connect(mapStateToProps, mapDispatchToProps)(SuggestionsBox);


export {SuggestionsBoxContainer};