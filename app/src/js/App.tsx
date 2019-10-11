import * as React from 'react';
import '../scss/App.scss';
import {LandingContainer} from "./modules/landing/landingContainer"

import {Route, Redirect, Router} from 'react-router';

import {Switch} from 'react-router-dom';
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/landing" render={props => <LandingContainer/>}/>
                        <Redirect from="/" to="/landing"/>
                    </Switch>
                </Router>


            </div>
        );
    }
}

export default App;
