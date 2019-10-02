import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './js/registerServiceWorker';
import './js/modules/landing/landing.scss';

import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux'
import reducer from "./js/reducer";
import thunk from 'redux-thunk';
import {ConnectedRouter} from 'connected-react-router';
import {Route} from 'react-router';
import {LandingContainer} from "./js/modules/landing/landingContainer";

import {createBrowserHistory} from 'history'



const history = createBrowserHistory()

const reducers = combineReducers({...reducer});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
    )
)

ReactDOM.render(
    <Provider
        store={store}>
        <ConnectedRouter history={history}>

            <div className="app">
                <Route path="/" render={props => <LandingContainer/>}/>
            </div>

        </ConnectedRouter>
    </Provider>

    ,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
