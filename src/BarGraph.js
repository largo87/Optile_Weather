import React from "react";
import { Bar } from "react-chartjs-2";



const BarGraph = (props) =>{
   
    const nextTemperature = props.label
    const axiTemperature =  props.axis
    const data = {
      labels: nextTemperature,
      datasets: [
        {
          label: 'Weather Savings',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data:  axiTemperature
        }
      ]
    };
    return(
        <Bar data={data}/>
    )
  }

  export default BarGraph;