import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import { hashHistory } from 'react-router';

import {testCaseActive} from './testCase';
import {fetchSuggestionsReducer} from './fetchSuggestions';
//import {draggableListsReducer} from './draggableList';
import {ingredientsReducer} from './ingredients';

const createReducer = (asyncReducers) => (
    combineReducers({
        ingredients: ingredientsReducer,
        suggestions: fetchSuggestionsReducer,
        testCaseActive: testCaseActive,
        form: formReducer,
        routing: routerReducer,
        ...asyncReducers
    })
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    createReducer({}), 
    composeEnhancers(
        applyMiddleware(routerMiddleware(hashHistory), thunk)
    )
);
store.asyncReducers = {};

const enhancedHistory = syncHistoryWithStore(hashHistory, store);

const injectAsyncReducer = (name, asyncReducer) => {

    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(createReducer({
        ...store.asyncReducers
    }));

};

export {store, injectAsyncReducer, enhancedHistory};