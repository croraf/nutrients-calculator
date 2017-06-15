import React from 'react';
import {PopupContainer} from './Popup/PopupContainer';

class ScriptCodeHeader extends React.Component {
    render () {

        return (
            <div>
                <i
                    className='material-icons'
                    onClick={this.props.onClick}
                    style={{fontSize: '15px', width: '30px', verticalAlign: 'text-top', cursor: 'pointer'}}>

                    settings_ethernet
                </i>
                <span>{this.props.scriptName}</span>
                <PopupContainer />
            </div>
        );
    }
}

import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    scriptName: state.testCaseActive.testCase.title
});

const ScriptCodeHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(ScriptCodeHeader);

export {ScriptCodeHeaderContainer};