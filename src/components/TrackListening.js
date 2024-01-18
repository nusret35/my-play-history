import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class TrackListening extends Component {
  data = [
    { name: 'Nights', value: 171 },
    { name: 'Father Time (feat. Sampha)', value: 116 },
    { name: 'Champagne Poetry', value: 112 },
    { name: 'No Role Modelz', value: 110 },
    { name: 'l e t . g o . m y . h a n d ', value: 108 },
    { name: 'Magnolia', value: 102 },
    { name: 'Flux Capacitor', value: 93 },
    { name: 'Off The Grid ', value: 92 },
    { name: 'No Problem (feat. Lil Wayne & 2 Chainz)', value: 91 },
    { name: 'Self Care', value: 88 },
  ];

  render() {
    const options = {
      backgroundColor: 'transparent',
      animationEnabled: true,
      theme: 'light2',
      title: {
        text: 'Top 10 Most Played Tracks in 4 years',
        fontColor:'white'
      },
      axisY2: {
        interlacedColor: 'rgba(1,77,101,.2)',
        gridColor: 'rgba(1,77,101,.1)',
        labelFontColor: 'white',
      },
      data: [
        {
          type: 'bar',
          axisYType: 'secondary',
          name: 'artists',
          dataPoints: this.data.map((item) => ({
            y: item.value,
            label: item.name,
          })),
        },
      ],
      axisX: {
        interval: 1,
        labelFontColor: 'white',
      },
    };

    return (
      <div style={{ height: '100vh', padding: '5%' }}>
        <CanvasJSChart
          options={options}
          containerProps={{
            height: '70vh',
            width: '90vw',
            axisX: {
              interval: 1,
            },
          }}
        />
      </div>
    );
  }
}

export default TrackListening;
