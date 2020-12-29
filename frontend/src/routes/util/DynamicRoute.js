import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const getImportingPromise = (pathname) => {
    switch (pathname.split('/')[1]) {
        case 'statistics':
            return import(/* webpackChunkName: "chunckStatistics" */  '../Statistics/Statistics');
        case 'calculator':
            return import(/* webpackChunkName: "chunckCalculator" */  '../Calculator/Calculator');
        case 'calendar':
            return import(/* webpackChunkName: "chunckCalendar" */  '../Calendar/CalendarContainer');
        case 'profile':
            return import(/* webpackChunkName: "chunckProfile" */  '../Profile/ProfileContainer');
        case 'login':
            return import(/* webpackChunkName: "chunckLogin" */  '../Login');
        default:
            return import(/* webpackChunkName: "chunckLogin" */  '../Login');
    }
};

const DynamicRoute = ({ secure = false, location }) => {
    const [component, setComponent] = useState(
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%', marginBottom: '10%' }}>
            {/* <RefreshIcon style={{color: 'cyan', width: '100px', height: '100px'}}/> */}
            Loading ...
        </div>
    );
    const loginStatus = useSelector(state => state.login.status);

    useEffect(() => {
        if (secure === false || (secure === true && loginStatus === 'AUTHENTICATED')) {

            getImportingPromise(location.pathname)
                .then((file) => {

                    console.log(file);

                    const Component = file.default;
                    setComponent(<Component />);

                    if (location.pathname === '/login' || location.pathname === '/calculator') {
                        import(/* webpackChunkName: "chunckCalculator" */  '../Calculator/Calculator');
                        import(/* webpackChunkName: "chunckProfile" */  '../Profile/ProfileContainer');
                        import(/* webpackChunkName: "chunckStatistics" */  '../Statistics/Statistics');
                        import(/* webpackChunkName: "chunckCalendar" */  '../Calendar/CalendarContainer');
                    }
                });
        } else {
            setComponent(<div>Unauthorized</div>);
        }
    }, [secure, location.pathname, loginStatus]);

    return component;
};


export default DynamicRoute;
