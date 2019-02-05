import React from 'react';
import Moment from 'react-moment';
// import {Link} from 'react-router-dom';
import Counter from '../animate/Counter';
import '../../App.css';
import Forecast from './Forecast';



const Current = (props) => {

    
    console.log(props)
    const {dt} = props.weatherInfo;
    const toFarenheit = function(x){
        return (Math.round((x-273.15) * 9/5 + 32));
    }
    
        if (Object.keys(props.weatherInfo).length===0){
            return null;
        } else { 
            console.log( props.weatherInfo);
        return(
            <React.Fragment>
                <section className = "time animateFade">
                        <Moment className ="timeMonth" format="MMMM" >{dt*1000}</Moment>
                        <Moment className ="timeDay"format="D">{dt*1000}</Moment>
                        <Moment className ="timeHour" format="h:mm A">{dt*1000}</Moment>
                </section>
                    <div className = "currentCard animateFade">
                    <p className = 'description'>{props.weatherInfo.weather[0].description}</p>
                    <div className = 'theTemp'>
                        <Counter nowTemp = {toFarenheit(props.weatherInfo.main.temp)} />
                    </div>
                    <section className = 'hilo'>
                        <p className ="dailyHigh">High: { toFarenheit(props.weatherInfo.main.temp_max)}<span>&deg;</span> / Low: { toFarenheit(props.weatherInfo.main.temp_min)}<span>&deg;</span></p>
                   
                    </section>
                    <section className = "conditions">
                        <p> Humidity: {props.weatherInfo.main.humidity}<span>&#37;</span></p>
                        <p> Wind: {props.weatherInfo.wind.speed} m/s</p>
                    </section>
                    </div>
               
                   <Forecast forecast = {props.forecast}></Forecast>
                    
            </React.Fragment>

        )
    
    }
}


export default Current;