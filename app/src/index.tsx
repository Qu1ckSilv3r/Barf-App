import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './js/registerServiceWorker';
import './js/modules/landing/landing.scss';

import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux'
import reducer from "./js/reducer";
import thunk from 'redux-thunk';
import App from "./js/App";


const reducers = combineReducers({...reducer});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
    )
)

ReactDOM.render(
    <Provider
        store={store}>
        <App/>
    </Provider>

    ,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
