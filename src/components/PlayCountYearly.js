import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class PlayCountYearly extends Component {

    data = [
        {label:'2020', y:11139},
        {label:'2021', y:15476},
        {label:'2022', y:19789},
        {label:'2023', y:15589}
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
				text: "Play counts at each year"
			},
			axisY: {
				title: "Play Counts",
			},
			axisX: {
				title: "Years",
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
			<h2 style={{fontSize:'5rem', paddingTop:'5%'}}>I listened to music mostly in 2022</h2>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	} 			
}


export default  PlayCountYearly;