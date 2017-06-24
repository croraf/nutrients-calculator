import React from 'react';
import {connect} from 'react-redux';

import {Fade} from 'react-bootstrap';

import popupStyles from './popupStyles.css';

class Popup extends React.Component {
    render () {
        return (
            <Fade 
                in={this.props.show}
                timeout={500}
                transitionAppear={true}
                onEntered={this.props.saved}
                mountOnEnter={true}
                unmountOnExit={true}>
                <div className='popup-save'>
                    SCRIPT SAVED
                </div>
            </Fade>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    saved: () => {dispatch({type: 'SAVE_ENDED'});}
});

const mapStateToProps = (state) => ({
    show: state.save
});

const PopupContainer = connect(mapStateToProps, mapDispatchToProps)(Popup);

export {PopupContainer};