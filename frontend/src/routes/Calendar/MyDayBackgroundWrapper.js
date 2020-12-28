import React from 'react';

import Button from '@material-ui/core/Button';
import { MyDialog } from './MyDialog';

class MyDayBackgroundWrapper extends React.Component {

    state = {
        marked: undefined,
        dialogOpen: false
    }

    dateSelectHandler = () => {

        if (this.state.marked) {
            console.log('marked date');
            this.setState({
                dialogOpen: true
            });
        } else {
            this.editDateHandler();
        }
    }

    closeDialog = () => {
        this.setState({
            dialogOpen: false
        });
    }

    editDateHandler = () => {
        const { value, editDateHandler } = this.props;

        editDateHandler(value.toDateString(), this.state.marked);
    }

    componentWillMount() {

        const { value, markedDates } = this.props;

        if (markedDates.find((date) => (date.toDateString() === value.toDateString()))) {
            this.setState({
                marked: true
            });
        }
    }

    render() {

        return (
            <div
                style={{
                    flexBasis: '14.285714285714285%',
                    maxWidth: '14.285714285714285%'
                }}
                className='rbc-day-bg'
            >
                <Button
                    style={{
                        marginTop: '20px',
                        height: '100%',
                        width: '100%',
                        minWidth: '0px'
                    }}
                    backgroundColor={this.state.marked && 'aqua'}
                    hoverColor='lightgray'
                    onClick={this.dateSelectHandler}>

                    {this.state.marked ? <div /> : <div />}
                </Button>
                <MyDialog open={this.state.dialogOpen} onClose={this.closeDialog} onConfirm={this.editDateHandler} />
            </div>
        );
    }
}

export { MyDayBackgroundWrapper };
