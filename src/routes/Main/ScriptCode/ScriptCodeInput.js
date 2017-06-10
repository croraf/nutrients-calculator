import React from 'react';

import './scriptCodeStyles.css';

class ScriptCodeInput extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            value: props.testCase.body
        };
    }

    handleKeyDown = (event) => {
        if (event.ctrlKey && event.keyCode === 83){
            event.preventDefault();
            //alert('ctrl+s');
            this.props.save();
        }
    }

    handleChange = (event) => {

        this.setState ({value: event.target.value});
    }

    componentWillReceiveProps(nextProps){

        this.setState({
            value: nextProps.testCase.body
        });
    }

    render () {
        return (
            <textarea
                className='scriptCodeInput'
                rows={100} onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                value={this.state.value} />
        );
    }
}

export {ScriptCodeInput};