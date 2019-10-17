import * as React from 'react';
import '../scss/App.scss';
import {LandingContainer} from "./modules/landing/landingContainer"

import {Route, Redirect} from 'react-router';

import {Switch} from 'react-router-dom';
import {ConnectedRouter} from "connected-react-router";
import {createBrowserHistory} from "history";
import {PetsAndPlansContainer} from "./modules/petsAndPlans/petsAndPlansContainer";
import {NavigationBarContainer} from "./modules/navigationBar/navigationBarContainer";
//import {SideNav} from "./components/sideNav";
import SideDialogContainer from "./modules/sideDialog/sideDialogContainer";
import SideNavigationContainer from "./modules/navigationSide/sideNavigationContainer";

export const history = createBrowserHistory();

interface RouteWrapperProps {
    content: any,
    sideNavContent?: any
}

class RouteWrapper extends React.Component<RouteWrapperProps, {}> {

    render() {
        return (
            <div className="routeWrapper">
                <NavigationBarContainer/>
                <SideNavigationContainer/>
                <div className="content">
                    {this.props.content}
                </div>
                <SideDialogContainer/>
            </div>
        )
    }
}

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <ConnectedRouter history={history}>

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
                </ConnectedRouter>


            </div>
        );
    }
}

export default App;
