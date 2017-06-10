import React from 'react';

import {FileContainer} from './FileContainer';

class FolderComponent extends React.Component {
    render () {
        return (
            <div>
                <div>
                    <span className='testsHierarchyItem testsHierarchyItemFolder'>{this.props.folder.name}</span>
                </div>
                <div style={{position: 'relative', left: '15px', marginBottom: '10px'}}>
                    {this.props.folder.children.map((item)=> (
                            item.type === 'FILE' ? <FileContainer key={item.name} fileName={item.name} fileId={item.id}/> : 
                            <FolderComponent key={item.name} folder={item}/>
                    ))}
                </div>
            </div>
        );
    }
}

FolderComponent.propTypes = {
    folder: React.PropTypes.object
};

export {FolderComponent};