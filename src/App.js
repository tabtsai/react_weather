import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"import React, { Component } from 'react';
            import Navbar from './components/layout/Navbar';
            import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
            import Background from './background';
            import Forecast from './components/weather/Forecast';
            import './App.css';
            
            // import Current from './components/weather/Current';
            import './App.css';
            
            class App extends Component {
              render() {
                return (
                  <React.Fragment>
                  <Navbar />
            
                  <Router>
                    <Switch>
                  <Route exact path = "/" component = {Background} />
                  <Route exact path = "/forecast/:id" component = {Forecast} />
                  </Switch>
                  </Router>
            
                    
                  
                   
                  
                  </React.Fragment>
                  
                );
              }
            }
            
            export default App;
            
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
