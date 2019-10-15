import * as React from 'react';
import '../scss/App.scss';
import {LandingContainer} from "./modules/landing/landingContainer"

import {Route, Redirect, Router} from 'react-router';

import {Switch} from 'react-router-dom';
import {createBrowserHistory} from "history";
import {PetsAndPlansContainer} from "./modules/petsAndPlans/petsAndPlansContainer";
import {NavigationBarContainer} from "./modules/navigationBar/navigationBarContainer";

export const history = createBrowserHistory();

interface RouteWrapperProps {
    content: any
}

class RouteWrapper extends React.Component<RouteWrapperProps, {}> {

    render() {
        return (
            <div className="routeWrapper">
                <NavigationBarContainer/>
                {this.props.content}
            </div>
        )
    }
}

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" render={props => <LandingContainer/>}/>
                        <Route exact path="/petsAndPlans"
                               render={props => <RouteWrapper content={<PetsAndPlansContainer {...props}/>}/>}/>
                        <Route exact path="/components"
                               render={props => <RouteWrapper content={'COMPONENTS'}/>}/>
                        <Route exact path="/encyclopedia"
                               render={props => <RouteWrapper content={'ENCYCLOPEDIA'}/>}/>
                        <Route exact path="/settings"
                               render={props => <RouteWrapper content={'SETTINGS'}/>}/>
                        <Redirect from="/" to="/landing"/>
                    </Switch>
                </Router>


            </div>
        );
    }
}

export default App;
