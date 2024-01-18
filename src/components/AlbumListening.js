import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class AlbumListening extends Component {
  data = [
    { name: 'Mr. Morale & The Big Steppers', value: 717 },
    { name: 'Certified Lover Boy', value: 483 },
    { name: 'Blonde', value: 477 },
    { name: 'Donda', value: 416 },
    { name: 'The Off-Season', value: 402 },
    { name: 'ASTROWORLD', value: 401 },
    { name: 'A Written Testimony', value: 381 },
    { name: 'CALL ME IF YOU GET LOST', value: 379 },
    { name: 'UTOPIA', value: 363 },
    { name: 'Cole World: The Sideline Story', value: 362 },

  ];

  render() {
    const options = {
      backgroundColor: 'transparent',
      animationEnabled: true,
      theme: 'light2',
      title: {
        text: 'Top 10 Most Played Albums in 4 years',
        fontColor: 'black'
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

export default AlbumListening;
