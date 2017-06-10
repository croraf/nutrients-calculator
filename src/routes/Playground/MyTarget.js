import React, {PropTypes} from 'react';

import {connect} from 'react-redux';
import { DropTarget } from 'react-dnd';

import {store} from '../../reducers/store';

class MyTargetComponent extends React.Component {
    render () {

        const { connectDropTarget, isOver, canDrop, listItems } = this.props;

        return (
            <div>
                <div style={{position: 'relative', width: '300px', height: '300px', backgroundColor: 'pink'}}>
                    {connectDropTarget(
                        <ul>
                            {listItems.map((item, index)=><li key={index}>{item}</li>)}
                        </ul>
                    )}
                </div>
                Is over: {isOver ? 'true' : ''}, Can drop: {(canDrop===true) ? 'true' : ((canDrop===false) ? 'false' : 'undef')}
            </div>
        );
    }
}

const collect = (connect, monitor) => ({

    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
});

const dropTargetSpecification = {
    canDrop(props) {
        return true;
        /*return canMoveKnight(props.x, props.y);*/
    },
    drop(props, monitor) {
        props.dispatchItemDropped(monitor.getItem().draggedItem);
        console.log('drop action');
        /*moveKnight(props.x, props.y);*/
    }
};

MyTargetComponent.propTypes = {
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    listItems: PropTypes.array.isRequired
};



const MyDroppableTarget = DropTarget('KNIGHT', dropTargetSpecification, collect)(MyTargetComponent);

const mapStateToProps = (state) => ({
    listItems: state.draggableList.target
});

const mapDispatchToProps = (dispatch) => ({
    dispatchItemDropped: (item) => {dispatch({type: 'ITEM_DROPPED', item: item});}
});

export const MyTargetContainer = connect(mapStateToProps, mapDispatchToProps)(MyDroppableTarget);