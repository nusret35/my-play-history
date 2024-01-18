import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class NonRapArtistListening extends Component {
  data = [
    { name: 'The Weeknd', value: 947 },
    { name: 'Frank Ocean', value: 644 },
    { name: 'Lana Del Rey', value: 336 },
    { name: 'Pink Floyd', value: 290 },
    { name: 'Amy Winehouse', value: 251 },
    { name: 'KAYTRANADA', value: 223 },
    { name: 'J. Cole', value: 194 },
    { name: 'Drake', value: 178 },
    { name: 'Arthur Rubinstein', value: 162 },
    { name: 'XXXTENTACION', value: 151 },
  ];

  render() {
    const options = {
      backgroundColor: 'transparent',
      animationEnabled: true,
      theme: 'light2',
      title: {
        text: 'Top 10 Most Played Non-Rap Artists in 4 years',
        fontColor:'black'
      },
      axisY2: {
        interlacedColor: 'rgba(1,77,101,.2)',
        gridColor: 'rgba(1,77,101,.1)',
        labelFontColor: 'black'
      },
      data: [{
        type: 'bar',
        axisYType: 'secondary',
        name: 'artists',
        dataPoints: this.data.map(item => ({
          y: item.value,
          label: item.name,
        }))
      }],
      axisX: {
        interval: 1,
        labelFontColor: 'black'
      }
    };

    return (
      <div style={{ height: '100vh', padding: '5%' }}>
        <CanvasJSChart
          options={options}
          containerProps={{
            height: '70vh',
            width: '90vw',
            axisX: {
              interval: 1
            }
          }}
        />
      </div>
    );
  }
}

export default NonRapArtistListening;
