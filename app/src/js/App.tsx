import * as React from 'react';
import '../scss/App.scss';
import {LandingContainer} from "./modules/landing/landingContainer"

import {Route, Redirect, Router} from 'react-router';

import {Switch} from 'react-router-dom';
import {createBrowserHistory} from "history";
import {PetsAndPlansContainer} from "./modules/petsAndPlans/petsAndPlansContainer";

export const history = createBrowserHistory();

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" render={props => <LandingContainer/>}/>
                        <Route exact path="/petsAndPlans" render={props => <PetsAndPlansContainer {...props}/>}/>
                        <Redirect from="/" to="/landing"/>
                    </Switch>
                </Router>


            </div>
        );
    }
}

export default App;
