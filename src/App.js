import React, { Component } from 'react';

// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Background from './background';
// import Forecast from './components/weather/Forecast';
import './App.css';

// import Current from './components/weather/Current';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
         {/* <Router>
            <Switch>
              <Route exact path = "/" component = {Background} />
              <Route exact path = "/forecast/:id" component = {Forecast} />
            </Switch>
          </Router> */}
          <Background />
       </React.Fragment>
      
    );
  }
}

export default App;
