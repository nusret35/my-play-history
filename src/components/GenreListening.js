import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class GenreListening extends Component {
  data = [
    { name: 'Hip-Hop/Rap', value: 66.2 },
    { name: 'Rock', value: 2.6 },
    { name: 'Pop', value: 7.8 },
    { name: 'R&B/Soul', value: 7.8 },
    { name: 'Alternative', value: 2.7 },
    { name: 'Other', value: 12.9 },
  ];

  render() {
    const options = {
      backgroundColor: 'transparent',
      animationEnabled: true,
      theme: 'light2',
      title: {
        text: 'Listened Genres',
        fontColor:'black'
      },
      axisY2: {
        interlacedColor: 'rgba(1,77,101,.2)',
        gridColor: 'rgba(1,77,101,.1)',
        labelFontColor: 'black'
      },
      data: [{
        type: 'pie',
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

export default GenreListening;
