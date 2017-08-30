import React from 'react';
import PropTypes from 'prop-types';

import {Route, Redirect} from 'react-router';

const dynamicRender = () => {

    /* const MyComponent = import(  webpackChunkName: "chunckCalculator"    '../Calculator/CalculatorContainer')
                        .then( (file) => file.CalculatorContainer;  ); */

};

class PrivateRoute extends React.Component {
    
    componentWillMount (props) {
        console.log('rafa', props.authed);
    }
    render () {
        return null;
        /* const {component: Component, authed, ...rest} = this.props;

        console.log('check auth route');
        
        return (
            
            <Route
            {...rest}
            render={(props) => authed === true
                ? dynamicRender()
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
            />
        ); */
    }
}

export {PrivateRoute};
