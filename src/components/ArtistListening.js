import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ArtistListening extends Component {
  data = [
    { name: 'Drake', value: 2623 },
    { name: 'Kanye West', value: 2128 },
    { name: 'Kendrick Lamar', value: 1988 },
    { name: 'J.Cole', value: 1556 },
    { name: 'Travis Scott', value: 1384 },
    { name: 'Eminem', value: 1319 },
    { name: 'Tyler, The Creator', value: 1186 },
    { name: 'JAY-Z', value: 1092 },
    { name: 'The Weeknd', value: 1057 },
    { name: 'A$AP Rocky', value: 771 },
  ];

  render() {
    const options = {
      backgroundColor: 'transparent',
      animationEnabled: true,
      theme: 'light2',
      title: {
        text: 'Top 10 Most Played Artists in 4 years',
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

export default ArtistListening;
