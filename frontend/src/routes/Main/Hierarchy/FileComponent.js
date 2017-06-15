import React from 'react';

class FileComponent extends React.Component {

    onClickHandler = () => {
        this.props.selectTestCase(this.props.fileId);
    }

    render () {

        const {fileName, fileId} = this.props;

        return (
            <div>

                <span 
                    className='testsHierarchyItem testsHierarchyItemFile'
                    onClick={this.onClickHandler}>

                    {fileName}
                </span>
            </div>
        );
    }
}

export {FileComponent};