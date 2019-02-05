import React, {Component} from 'react';
import Current from './components/weather/Current';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Forecast from './components/weather/Forecast';
// import Moment from 'react-moment';


const OWKey = '7fa3b6273bb810b4c6dab61ec0b4a32f';

class Background extends Component{
    constructor(props){
        super(props);
        this.state = {
            current: {},
            cityName:'',
            cityId:'',
            forecast:[]
            }
        this.citySearch = this.citySearch.bind(this);
        this.getCurrent = this.getCurrent.bind(this);
        // this.getForecast = this.getForecast.bind(this);
    }

    citySearch(event){
        this.setState({
          cityName: event.target.value
        })
    }

    getCurrent(event){
        event.preventDefault();
        fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&APPID=${OWKey}`)
        .then( response => {
            if (!response.ok) { throw response }
            return response.json()  //we only get here if there is no error
          })
          .then(results => {
            this.setState({
                current: results
            })
            return(
                fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.cityName}&cnt=10&APPID=${OWKey}`)
                .then(response => response.json())
                .then(results => {
                        console.log(results.list)
                        this.setState ({
                            forecast: results.list
                        })
                })
                .catch(console.error)
            )

        })
          .catch( err => {
            err.text().then( errorMessage => {
              window.alert('please try another city name');
              this.setState({
                  cityName: ''
                })
            })
          })

    }

    render(){

        
        return(
            <div className = "container">
                
                <div className = "searchBox">
                    <form onSubmit = {this.getCurrent}>
                        <input 
                            value = {this.state.cityName} 
                            onChange = {this.citySearch} 
                            placeholder = "City name..."
                            name = "cityName"
                            autoComplete="off"
                        />
                        <button className ='primaryButton' type = "submit">Get Weather</button>
                    </form>
                </div>
                <Router>
                    <Switch>
                        <Route exact path = {process.env.PUBLIC_URL + '/'} render = {(props) => <Current {...props} weatherInfo = {this.state.current} fetchInfo = {this.getCurrent} forecast = {this.state.forecast}/> } />
                        {/* <Route exact path = {process.env.PUBLIC_URL + '/forecast/:id'} component = {Forecast} /> */}
                    </Switch>
                </Router>
                {/* <Current weatherInfo = {this.state.current} fetchInfo = {this.getCurrent} /> */}
                
            </div>
            
        )
    }
    
}

export default Background;
