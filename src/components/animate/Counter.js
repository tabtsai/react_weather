import React from 'react';
import { tween } from 'popmotion';
import '../../App.css';

class Counter extends React.Component {

    

    componentDidMount(){
        const counterAnimate = () => {
            const count = document.querySelector('#currentTemp');
            const updateCounter = (v) => count.innerHTML = Math.round(v);
            tween({to: this.props.nowTemp, duration: 4000 }).start(updateCounter);

            const tempBlock = document.querySelector('.theTemp');
            tempBlock.classList.add('tempAnimate');
        }
        const fade = () => {
            const fadeArray = document.querySelectorAll(".animateFade");
            fadeArray.forEach(function(item){
                item.classList.add('fadeIn')
            })
        }
        const delayedAnimation = () => {
            window.setTimeout(counterAnimate, 2000); 
            window.setTimeout(fade, 500); 
         
        }
        delayedAnimation();
    }
    
    componentWillReceiveProps(nextProps){
        console.log('receiveprops');
        if(this.props.nowTemp !== nextProps.nowTemp){
               const count = document.querySelector('#currentTemp');
               const updateCounter = (v) => count.innerHTML = Math.round(v);
               tween({to: nextProps.nowTemp, duration: 4000 }).start(updateCounter);

               const tempBlock = document.querySelector('.theTemp');
               tempBlock.classList.remove('tempAnimate');
               tempBlock.classList.add('tempAnimate');

        }

     
    }
    render(){
            const search = document.querySelector('.searchBox');
            search.classList.add('moveUp');
            if (this.props.nowTemp.length===0){
                return null;
            } else {

            
            console.log('render here');
                      
            return(
                <React.Fragment>
                
                        <h1 id = "currentTemp">{this.props.nowTemp}</h1>
                        <span>&deg;</span><span>F</span>
                    
        
                </React.Fragment>
            )
        }

        
    }
}
    

export default Counter;