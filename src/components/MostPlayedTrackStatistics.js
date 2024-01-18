import React, {useState, useEffect, useRef} from "react";
import TrackListening from "./TrackListening";

function MostPlayedTrackStatistics() {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);


    useEffect(() => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5, // Adjust as needed, represents the percentage of the target element that needs to be visible to trigger the callback
        };
    
        const handleIntersection = (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        };
    
        const observer = new IntersectionObserver(handleIntersection, options);
    
        if (componentRef.current) {
          observer.observe(componentRef.current);
        }
    
        // Cleanup the observer on component unmount
        return () => {
          if (componentRef.current) {
            observer.unobserve(componentRef.current);
          }
        };
      }, []);


    return (
        <div style={{backgroundColor:'black'}}>
              <div style={{padding: '5%'}}>
                <div style={{fontSize: '3rem'}}>
                    <h2 style={{color:'white'}}>And the most played track is...</h2>
                </div>
            </div>
            <div
            ref={componentRef}
            className="fade-in-container"
            style={{
                padding: '5%',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
            }}
            >
              <a href="https://www.youtube.com/watch?v=r4l9bFqgMaQ" style={{ display: 'flex', textAlign: 'start', padding: '5%', textDecoration: 'none' }}>
                <img src={'https://hips.hearstapps.com/autoweek/assets/s3fs-public/FOblond_0.jpg?crop=0.625xw:1xh;center,top&resize=1200:*'} style={{height:'35rem',width:'35rem'}}/>
                <div style={{marginLeft:'5rem'}}>
                <h2 style={{ fontSize: '7rem', marginTop: '0rem', marginBottom: '20px', color:'white',textDecoration: 'none' }}>Nights</h2>
                <h2 style={{ fontSize: '3rem', marginTop: '0rem', color:'white',textDecoration: 'none' }}>by Frank Ocean</h2>
                <h2 style={{ fontSize: '2rem', color:'white', textDecoration: 'none' }}>with 171 play counts</h2>
                </div>
              </a>
            </div>
            <TrackListening/>
        </div>
    )
}

export default MostPlayedTrackStatistics;