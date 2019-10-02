import * as React from 'react';
import '../scss/App.scss';
import {LandingContainer} from "./modules/landing/landingContainer"

import {Route, Redirect} from 'react-router';

import {Switch} from 'react-router-dom';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/landing" render={props => <LandingContainer/>}/>
          <Redirect from="/" to="/landing"/>
        </Switch>

      </div>
    );
  }
}

export default App;
