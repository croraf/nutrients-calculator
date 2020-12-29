import React, { useEffect } from 'react';
import CalculatorContent from './CalculatorContent';
import { useDispatch, } from 'react-redux';
import { fetchIngredients } from 'src/modules/ingredients';
import { Route, Redirect, Switch } from 'react-router-dom';

const Calculator = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchIngredients());
    }, [dispatch]);

    console.log('Calculator rerender');

    return (
        <Switch>
            <Route path='/calculator' exact render={() => <Redirect to='/calculator/2020-12-29' />} />
            <Route path='/calculator/:date' component={
                (props) => <CalculatorContent {...props} />
            } />
        </Switch>

    );
};


export default Calculator;
