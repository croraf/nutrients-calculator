/* import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk'; */

/* import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'; */

/* import { browserHistory } from 'react-router';

import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import {persistStore, autoRehydrate} from 'redux-persist';

import {fetchIngredientsReducer, fetchIngredients} from './ingredients';
import {defineIngredientDialogueReducer} from './defineIngredientDialogue';
import {nutrientsReducer} from './nutrients';
import {loginReducer} from './login';
import {dailyDataReducer} from './dailyData';
import {selectDateReducer} from './dateSelect';
import {caloriesTargetReducer} from './caloriesTarget';


const createReducer = (asyncReducers) => (
    combineReducers({
        login: loginReducer,
        nutrients: nutrientsReducer,
        ingredients: fetchIngredientsReducer,
        defineIngredientDialogue: defineIngredientDialogueReducer,
        form: formReducer,
        routing: routerReducer,
        dailyData: dailyDataReducer,
        dateSelect: selectDateReducer,
        caloriesTarget: caloriesTargetReducer,
        ...asyncReducers
    })
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory();

const store = createStore(
    createReducer({}), 
    composeEnhancers(
        applyMiddleware(routerMiddleware(history), thunk),
        autoRehydrate()  
    )
);
store.asyncReducers = {};

const injectAsyncReducer = (name, asyncReducer) => {

    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(createReducer({
        ...store.asyncReducers
    }));

};

setTimeout(() => {store.dispatch(fetchIngredients());}, 1000);

persistStore(store, {whitelist: ['form',  'dailyData', 'dateSelect',  'caloriesTarget']});

export {store, injectAsyncReducer, history}; */


import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import { AnyAction, configureStore, Reducer } from '@reduxjs/toolkit';

import { fetchIngredientsReducer, } from './ingredients';
import { defineIngredientDialogueReducer } from './defineIngredientDialogue';
import { nutrientsReducer } from './nutrients';
import { loginReducer } from './login';
import { dailyDataReducer } from './dailyData';
import { selectDateReducer } from './dateSelect';
import { caloriesTargetReducer } from './caloriesTarget';
import { reducer as formReducer } from 'redux-form';

const history = createBrowserHistory();

const reducersArray = {
    router: connectRouter(history) as Reducer<RouterState<unknown>, AnyAction>,
    login: loginReducer,
    nutrients: nutrientsReducer,
    ingredients: fetchIngredientsReducer,
    defineIngredientDialogue: defineIngredientDialogueReducer,
    form: formReducer,
    dailyData: dailyDataReducer,
    dateSelect: selectDateReducer,
    caloriesTarget: caloriesTargetReducer,
};

const store = configureStore({
    reducer: reducersArray,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
});

export type RootState = ReturnType<typeof store.getState>;
export { store, history };
