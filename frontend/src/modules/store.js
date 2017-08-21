import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import { browserHistory } from 'react-router';

import {fetchIngredientsReducer, fetchIngredients} from './ingredients';
import {defineIngredientDialogueReducer} from './defineIngredientDialogue';
import {nutrientsReducer} from './nutrients';
import {loginReducer} from './login';
import {dailyDataReducer} from './dailyData';

const createReducer = (asyncReducers) => (
    combineReducers({
        login: loginReducer,
        nutrients: nutrientsReducer,
        ingredients: fetchIngredientsReducer,
        defineIngredientDialogue: defineIngredientDialogueReducer,
        form: formReducer,
        routing: routerReducer,
        dailyData: dailyDataReducer,
        ...asyncReducers
    })
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    createReducer({}), 
    composeEnhancers(
        applyMiddleware(routerMiddleware(browserHistory), thunk)
    )
);
store.asyncReducers = {};

const enhancedHistory = syncHistoryWithStore(browserHistory, store);

const injectAsyncReducer = (name, asyncReducer) => {

    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(createReducer({
        ...store.asyncReducers
    }));

};

setTimeout(() => {store.dispatch(fetchIngredients());}, 1000);

export {store, injectAsyncReducer, enhancedHistory};
