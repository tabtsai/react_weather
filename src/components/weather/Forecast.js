import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

const OWKey = '7fa3b6273bb810b4c6dab61ec0b4a32f';

class Forecast extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            forecast: []

        }
    }

    componentDidMount(){
            fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?id=${this.props.match.params.id}&cnt=10&APPID=${OWKey}`)
            .then(response => response.json())
            .then(results => {
                    console.log(results.list)
                    this.setState ({
                        forecast: results.list
                    })
            })
            .catch(console.error)
        }

    render(){
        const toFarenheit= function(x){
            return (Math.round((x-273.15) * 9/5 + 32));
        }
        return(
            <div id = 'forecastContainer'>
                 {this.state.forecast.map(function(item){
                    return (
                            
                                <div className = "weeklyForecast" key = {item.dt}>
                                    <Moment format="ddd">{item.dt*1000}</Moment>
                                    <p>{toFarenheit(item.temp.day)}</p>
                                    <img src = {`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}  alt = {`http://openweathermap.org/img/w/${item.weather[0].main}`}/>
                                </div>
                           
                      
                    )
                }) }
                
                <Link to = "/"> Back to Search </Link>   
                
                </div>
        )
    }
}

export default Forecast;