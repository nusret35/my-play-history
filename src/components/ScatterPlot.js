import React, { useEffect, useRef } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ScatterPlot = () => {
    const data = [
        {x:1010,y:9949,name:'2020'},
        {x:1330,y:14564, name:'2021'},
        {x:1679,y:17420, name: '2022'},
        {x:819,y:12827, name: '2023'}
    ];

    const options = {
      animationEnabled: true,
      theme: 'light2',
      title: {
        text: 'Played and Released in the Same Year vs. Total Play Count',
      },
      axisX: {
        title: 'Played And Released in the Same Year',
      },
      axisY: {
        title: 'Total Play Counts',
      },
      data: [
        {
          type: 'scatter',
          toolTipContent: '<b>{name}</b><br/>x: {x}<br/>y: {y}',
          dataPoints: data,
        },
      ],
    };
  
    return <CanvasJSChart 
     options={options} 
     containerProps={{
        height: 500, 
        width: 700,
     }}
    />;
  };
  
  export default ScatterPlot;