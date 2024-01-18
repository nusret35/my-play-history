import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class HourlyListening extends Component {

    data = [
        { label: 0, y: 1889 },
        { label: 1, y: 1144 },
        { label: 2, y: 802 },
        { label: 3, y: 420 },
        { label: 4, y: 925 },
        { label: 5, y: 1792 },
        { label: 6, y: 1575 },
        { label: 7, y: 2210 },
        { label: 8, y: 2976 },
        { label: 9, y: 3369 },
        { label: 10, y: 3667 },
        { label: 11, y: 4508 },
        { label: 12, y: 4640 },
        { label: 13, y: 4061 },
        { label: 14, y: 4237 },
        { label: 15, y: 4149 },
        { label: 16, y: 4595 },
        { label: 17, y: 3373 },
        { label: 18, y: 2472 },
        { label: 19, y: 2934 },
        { label: 20, y: 3719 },
        { label: 21, y: 3927 },
        { label: 22, y: 3776 },
        { label: 23, y: 3363 },
    ];

	constructor() {
		super();
		this.addSymbols = this.addSymbols.bind(this);
	}
	
	addSymbols(e) {
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
		
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
 
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;	
	}
	
	render() {	
		const options = {
			animationEnabled: true,
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			title: {
				text: "Play counts at each hour"
			},
			axisY: {
				title: "Play Counts",
			},
			axisX: {
				title: "Hours",
			},
			data: [{
				type: "column",
				dataPoints: this.data
			}],
			axisX:{
				imtervaş:1
			}
		}
						
		return (
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
			<CanvasJSChart options = {options}
				onRef={ref => this.chart = ref}
				containerProps = {
					{
				height:'60vh', 
				paddingTop:'5%',
				width:'80vw',
				axisX:{
					interval: 1
				 }}}
				
			/>
			<h2 style={{fontSize:'5rem', paddingTop:'5%'}}>I listened to music mostly at 12 o'clock</h2>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	} 			
}


export default  HourlyListening
