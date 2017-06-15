import React from 'react';

import {connect} from 'react-redux';

class SuggestionsBox extends React.Component {
    render () {

        const {suggestions} = this.props;

        return (
            <div style={{position: 'absolute', border: '1px solid black'}}>
                {suggestions.map((item, index) => (<span key={index} style={{padding: '5px'}}>item</span>))}
            </div>
        );
    }
}



const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    suggestions:  ['a', 'sad', 'ima']
});

const SuggestionsBoxContainer = connect(mapStateToProps, mapDispatchToProps)(SuggestionsBox);


export {SuggestionsBoxContainer};