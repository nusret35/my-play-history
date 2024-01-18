import React, {useState} from 'react'
import './App.css';
import {useLottie} from 'lottie-react';
import playAnimation from './assets/play-button-animation.json';
import GeneralStatistics from './components/GeneralStatistics'
/*import HourlyListening from './components/HourlyListening'*/
import DataSource from './components/DataSource';
import HourlyListening from './components/HourlyListening'
import MostListenedArtistStatistics from './components/MostListenedArtistStatistics';
import MostPlayedAlbumStatistics from './components/MostPlayedAlbumStatistics';
import MostPlayedTrackStatistics from './components/MostPlayedTrackStatistics';
import MostPlayedGenreStatistics from './components/MostPlayedGenreStatistics';
import MostListenedArtistNonRapStatistics from './components/MostListenedAristNonRapStatistics';
import MostPlayedAlbumNonRapStatistics from './components/MostListenedAlbumNonRapStatistics';
import MostListenedTtacksAtEachHour from './components/MostListenedTracksAtEachHour';
import MotivationPart from './components/MotivationPart';
import HypothesisTesting from './components/HypothesisTestingPart';
import PlayCountYearly from './components/PlayCountYearly';
import FindingsPart from './components/FindingsPart';
import Limitations from './components/Limitations';
import TheEnd from './components/TheEnd';

const chartData = {
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
  datasets: [
    {
      label: 'My Data',
      data: [10, 20, 30, 40],
      xAxisID: 'category', // Make sure this is set correctly
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  scales: {
    y: {
      type: 'category',
      beginAtZero: true,
    },
  },
};


function App() {
  const options = {
    animationData: playAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    const newScrollPosition = Math.round(event.target.scrollTop / window.innerHeight) * window.innerHeight;
    setScrollPosition(newScrollPosition);
  };
  
  return (
    
    <div className="App">
      <div style={{height:"100vh"}} onScroll={handleScroll} scrollTop={scrollPosition}>
        <div style={{marginTop:'7%',display:'flex',justifyContent:'space-between', padding:'5%'}}>
          <div style={{width:'50%'}}>
            <h2 style={{fontSize:'70px',textAlign:'left'}}>My Apple Music Play History </h2>
            <p style={{fontSize:'30px', textAlign:'justify'}}>
              Welcome to the musical journey of the past two years! 🎶 This project dives into the beats and rhythms that have colored my life from June 2021 to October 2023. Ever wondered what tunes accompanied those late-night study sessions or the soundtrack to the road trips? Well, you're about to find out!
            </p>
          </div>
          <div style={{alignSelf: 'center', height: '15%', width: '15%', marginRight: '10%' }}>{View}</div>
        </div>
      </div>
      <MotivationPart/>
      <DataSource/>
      <GeneralStatistics/>
      <HourlyListening/>
      <MostListenedArtistStatistics/>
      <MostPlayedAlbumStatistics/>
      <MostPlayedTrackStatistics/>
      <MostPlayedGenreStatistics/>
      <MostListenedArtistNonRapStatistics/>
      <MostPlayedAlbumNonRapStatistics/>
      <MostListenedTtacksAtEachHour/>
      <PlayCountYearly/>
      <HypothesisTesting/>
      <FindingsPart/>
      <Limitations/>
      <TheEnd/>
    </div>
  );
}

export default App;
