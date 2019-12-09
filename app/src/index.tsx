import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './js/registerServiceWorker';

import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux'
import reducer from "./js/reducer";
import thunk from 'redux-thunk';
import ConnectedAppWrapper,{history} from "./js/App";
import {connectRouter} from "connected-react-router";


const reducers = combineReducers({...reducer,router: connectRouter(history)});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
    )
)

ReactDOM.render(
    <Provider
        store={store}>
        <ConnectedAppWrapper/>
    </Provider>

    ,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
