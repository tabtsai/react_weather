import React from 'react';
import Moment from 'react-moment';
// import {Link} from 'react-router-dom';

// const OWKey = '7fa3b6273bb810b4c6dab61ec0b4a32f';


class Forecast extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            forecastDisplay:false
        };
        this.toggleForecast = this.toggleForecast.bind(this)
    }
    toggleForecast(){       
        if (this.state.forecastDisplay === true) {
        this.setState({
            forecastDisplay: false
        });
    } else {
            this.setState({
            forecastDisplay: true
            }) 
        } 
    }
    render(){
        const toFarenheit= function(x){
            return (Math.round((x-273.15) * 9/5 + 32));
        }
        if (this.state.forecastDisplay) {
            return(
                <React.Fragment>
                <div id = 'forecastContainer' className="animateFade">
                     {this.props.forecast.slice(1).map(function(item){
                        return (
                            <div className = "weeklyForecast" key = {item.dt}>
                                <Moment className = 'dayName' format="ddd">{item.dt*1000}</Moment>
                                
                                <img className = 'weatherIcon' src = {`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}  alt = {`http://openweathermap.org/img/w/${item.weather[0].main}`}/>
                                <p>{toFarenheit(item.temp.max)}<span>&deg;</span> / {toFarenheit(item.temp.min)}<span>&deg;</span></p>
                            </div>
                        )
                    }) }
                    </div>
                      {/* <Link className="primaryButton" to = {process.env.PUBLIC_URL + '/'}> Back to Search </Link>   */}
                </React.Fragment> 
            )
                }else {
            return (
               <button className ='primaryButton' onClick={this.toggleForecast}>Get Forecast</button>
            )
        }
    }
}

export default Forecast;