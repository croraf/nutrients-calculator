import React from 'react';
import {connect} from 'react-redux';

import {Panel} from 'react-bootstrap';

import {FileContainer} from './FileContainer';
import {FolderComponent} from './FolderComponent';

import 'styles/mainStyles.css';

class TestHierarchyComponent extends React.Component {
    render () {
        return (
            <Panel className={'att-panel '} header="Tests">
                {this.props.itemsHierarchy.map((item) => (
                        item.type === 'FILE' ? 
                        <FileContainer key={item.name} fileName={item.name} fileId={item.id}/> : 
                        <FolderComponent key={item.name} folder={item}/>
                ))}
            </Panel>
        );
    }
}

TestHierarchyComponent.propTypes = {
    itemsHierarchy: React.PropTypes.array
};


/*************************************************************************************/
const mapStateToProps = () => ({
    itemsHierarchy: [
        {id: 1, name: 'test1', type: 'FILE'},
        {name: 'testSuite2', type: 'FOLDER', 
            children: [
                {name: 'test21', type: 'FOLDER', 
                    children: [
                        {id: 2, name: 'test211', type: 'FILE'},
                        {id: 3, name: 'test212', type: 'FILE'}
                    ]
                },
                {id: 4, name: 'test22', type: 'FILE'},
            ]
        },
        {id: 5, name: 'test3', type: 'FILE'}
    ]
});

export const TestHierarchyContainer = connect(mapStateToProps)(TestHierarchyComponent);