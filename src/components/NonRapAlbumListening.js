import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class NonRapAlbumListening extends Component {
  data = [
    { name: 'Blonde', value: 477 },
    { name: 'Back to Black', value: 230 },
    { name: 'After Hours', value: 212 },
    { name: 'Chopin: Nocturnes', value: 167 },
    { name: 'Dawn FM', value: 143 },
    { name: 'CALL ME IF YOU GET LOST: The Estate Sale', value: 123 },
    { name: 'Con Todo El Mundo', value: 121 },
    { name: 'Emma Peters (Remixed)', value: 121 },
    { name: 'Norman F*cking Rockwell!', value: 120 },
    { name: 'Honestly, Nevermind', value: 118 },

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

export default NonRapAlbumListening;
