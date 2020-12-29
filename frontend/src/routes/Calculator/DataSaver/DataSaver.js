import React, { useState } from 'react';
/* import {MyDatePicker} from './MyDatePicker'; */
import { saveData } from 'src/modules/dailyData';
import { push } from 'connected-react-router';
import './my-date-picker.css';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import Snackbar from '@material-ui/core/Snackbar';
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import { useParams } from 'react-router-dom';


const DataSaver = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const analyzedData = useSelector(state => state.nutrients.data);
    const activeDate = useSelector(state => state.dateSelect.activeDate);
    const isEdit = useSelector(state => state.dateSelect.isEdit);

    const activeDateClickHandler = () => { dispatch(push('/calendar')); };

    const onSaveHandler = () => {
        dispatch(saveData(moment(activeDate)/* .startOf('day') */.format('YYYY-MM-DD'), analyzedData));
        setSnackbarOpen(true);
    };

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', margin: '0.2rem 0rem' }}>
            <Button
                variant='outlined'
                color='primary'
                disabled={snackbarOpen}
                onClick={onSaveHandler}
                style={{ width: '40px', minWidth: '40px' }}
            >
                <SaveIcon />
            </Button>

            <Button
                variant='outlined'
                onClick={activeDateClickHandler}
                style={{ width: '280px', marginLeft: '15px' }}
            >
                {params.date}
            </Button>

            {/* <div style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'center', padding: '8px', cursor: 'pointer', border: '1px solid rgb(0, 188, 212)'}}
                        onClick={activeDateClickHandler}
                    >
                        {activeDate || '<SELECT DATE>'}
                    </div> */}

            <Snackbar
                open={snackbarOpen}
                /* autoHideDuration={5000} */
                onClose={() => { setSnackbarOpen(false); }}
            >
                <Alert onClose={() => { setSnackbarOpen(false); }} severity="success" elevation={6} variant="filled">
                    {(isEdit ? 'Edited' : 'Saved') + ' for date: ' + moment(activeDate).format('YYYY-MM-DD')}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default DataSaver;
