import { connect } from 'react-redux';
import React, {PropTypes} from 'react';

import {SourceListItem} from './SourceListItem';

class MySourceComponent extends React.Component {

    render () {
        const { listItems } = this.props;

        console.log('renderSource ');
        
        return (
            
            <ul>
                {listItems.map((item, index)=><li key={index}><SourceListItem item={item} /></li>)}
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({
    listItems: state.draggableList.source
});

const mapDispatchToProps = (dispatch) => ({
    /*dispatchItemDropped: (item) => {dispatch({type: 'ITEM_DROPPED', item: item});}*/
});

export const MySourceContainer = connect(mapStateToProps, mapDispatchToProps)(MySourceComponent);