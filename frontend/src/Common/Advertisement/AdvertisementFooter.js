import { useEffect } from 'react';

import { embedAltcoinGraphs } from './embedAltcoinGraph';
import { Row, Col } from 'react-flexbox-grid';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    embeddedElement: {
        marginBottom: '5px',
        overflowX: 'hidden',
    }
});

const AdvertisementFooter = () => {
    const classes = useStyles();
    useEffect(() => {
        embedAltcoinGraphs();
    }, []);


    return (
        <Row
            style={{
                margin: 'auto',
                marginTop: '5px',
                padding: '10px',
                border: '2px solid rgb(0, 188, 212)',
                borderRadius: '5px'
            }} >
            <Col xs={12} sm={6} lg={3} className={classes.embeddedElement} />
            <Col xs={12} sm={6} lg={3} className={classes.embeddedElement} />
            <Col xs={12} sm={6} lg={3} className={classes.embeddedElement} />
            <Col xs={12} sm={6} lg={3} className={classes.embeddedElement} />
        </Row>
    );
};

export default AdvertisementFooter;
