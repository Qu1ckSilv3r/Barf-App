import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './js/App';
import registerServiceWorker from './js/registerServiceWorker';
import './scss/index.css';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux'
import reducer from "./js/reducers/reducer";
import thunk from 'redux-thunk';

const reducers = combineReducers({...reducer});

const store = createStore(reducers, applyMiddleware(thunk)
);


ReactDOM.render(
    <Provider
        store={store}>
        <App />
    </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
