import * as React from 'react';
import '../scss/App.css';
import LandingContainer from "./containers/landingContainer"


class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <LandingContainer/>
      </div>
    );
  }
}

export default App;
