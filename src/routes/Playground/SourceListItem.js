import React, {PropTypes} from 'react';

import { DragSource } from 'react-dnd';

class SourceListItemComponent extends React.Component {

    /*componentDidMount() {
        console.log('comp did mount');
        debugger;
        this.props.connectDragPreview(<div>moj preview</div>); 
    }*/

    render () {
        const { connectDragSource, connectDragPreview, isDragging, item } = this.props;

        console.log('renderSource ');
        
        return connectDragSource(
                <div style={isDragging ? {color: 'red'} : {}}>{item}</div>
        );
    }
}

const collect = (connect, monitor) =>({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
});

const dragSourceSpecification = {
    beginDrag(props) {
        console.log('drag began: ');
        console.log(props);
        return {draggedItem: props.item};
    }
};

SourceListItemComponent.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    item: PropTypes.node.isRequired
};

export const SourceListItem = DragSource('KNIGHT', dragSourceSpecification, collect)(SourceListItemComponent);

