import * as React from 'react';
import '../scss/App.scss';

import {Route, Redirect, RouteProps} from 'react-router';

import {connect} from 'react-redux'
import {Switch} from 'react-router-dom';
import {ConnectedRouter} from "connected-react-router";
import {createBrowserHistory} from "history";
import {PetsAndPlansContainer} from "./modules/petsAndPlans/petsAndPlansContainer";
import {NavigationBarContainer} from "./modules/navigationBar/navigationBarContainer";
//import {SideNav} from "./components/sideNav";
//import SideDialogContainer from "./modules/sideDialog/sideDialogContainer";
import SideNavigationContainer from "./modules/navigationSide/sideNavigationContainer";
import {EncyclopediaContainer} from "./modules/encyclopedia/encyclopediaContainer";
import {ComponentsContainer} from "./modules/components/componentsContainer";
import {SettingsContainer} from "./modules/settings/settingsContainer";
import {State} from "./reducer"
import {mergePropsFunc} from "./mergeFunction";
import {LoginContainer} from "./modules/login/loginContainer";
import {login} from "./modules/login/loginActions";
import {bindActionCreators} from "redux";

export const history = createBrowserHistory();


function NeedLogin(Comp: any) {
    interface NeedLoginProps {
        isAutoLogin: boolean,
        loggedIn: boolean,
        loginInProgress: boolean
    }

    interface NeedLoginMapPropsToState {
        isAutoLogin: boolean,
        loggedIn: boolean,
        loginInProgress: boolean
    }


    class NL extends React.PureComponent<NeedLoginProps & RouteProps, null> {
        render() {
            if (this.props.loggedIn) {
                return <Comp {...this.props}/>
            } else {
                return <Redirect
                    to={{
                        pathname: "/login",
                        state: {from: this.props.location}
                    }}
                />
            }
        }
    }


    return connect<NeedLoginMapPropsToState, {}, {}, NeedLoginProps, State>((state: State) => ({
        isAutoLogin: state.login.isAutoLogin,
        loggedIn: state.login.loggedIn,
        loginInProgress: state.login.loginInProgress,
    }), {}, mergePropsFunc)(NL as any)

}


const PetsAndPlansContainerNeedsLogin = NeedLogin(PetsAndPlansContainer);
const ComponentsContainerNeedsLogin = NeedLogin(ComponentsContainer);
const EncyclopediaContainerNeedsLogin = NeedLogin(EncyclopediaContainer);
const SettingsContainerNeedsLogin = NeedLogin(SettingsContainer);

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

            </div>
        )
    }
}

interface AppWrapperProps {
    location: Location,
    login: typeof login,
}

//@ts-ignore
const mapStateToProps = (state: State) => ({location: state.router.location})
const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        login: login,
    }, dispatch)
};


class AppWrapper extends React.Component<AppWrapperProps, {}> {
    componentDidMount() {
        const storedUsername = window.localStorage.getItem('rawmate_username');
        const storedPassword = window.localStorage.getItem('rawmate_password');

        if (storedUsername && storedPassword) {
            this.props.login(storedUsername, storedPassword, true)
        }

    }

    render() {
        return (
            <div className="App">
                <ConnectedRouter history={history}>

                    <Switch>
                        <Route exact path="/login" render={props => <LoginContainer/>}/>
                        <Route exact path="/petsAndPlans"
                               render={props => <RouteWrapper content={<PetsAndPlansContainerNeedsLogin {...props}/>}/>}/>
                        <Route exact path="/components"
                               render={props => <RouteWrapper content={<ComponentsContainerNeedsLogin {...props}/>}/>}/>
                        <Route exact path="/encyclopedia"
                               render={props => <RouteWrapper content={<EncyclopediaContainerNeedsLogin {...props}/>}/>}/>
                        <Route exact path="/settings"
                               render={props => <RouteWrapper content={<SettingsContainerNeedsLogin {...props}/>}/>}/>
                        <Redirect from="/" to="/login"/>
                    </Switch>
                </ConnectedRouter>


            </div>
        );
    }
}


const ConnectedAppWrapper = connect(mapStateToProps, mapDispatchToProps)(AppWrapper)

export default ConnectedAppWrapper;
