import React , { useEffect, useState,useRef } from 'react';
import Plot from 'react-plotly.js';




function Pump() {

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
var [x ,setx] = useState([5]);
var [y ,sety] = useState([]);
let a = []
  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (true) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        //var x = x.push(seconds);
         a = [...x,seconds]
        console.log(x)
        
        setx(x=>a)
        //sety({y:[...y,seconds]})
      
        }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  

  
  return (
<div>
  <h1>{seconds}</h1>
        <Plot

          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: 'scatter',
              mode: 'lines+points',
              marker: {color: 'red'},
            },
          ]}
          layout={ {width: 520, height: 240, title: {seconds} } }
        />
        </div>
      );
    
  }


  export default Pump;