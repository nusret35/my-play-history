import React, {useState, useEffect, useRef} from "react";
import AlbumListening from "./AlbumListening";
import NonRapArtistListening from "./NonRapArtistListening";
import NonRapAlbumListening from "./NonRapAlbumListening";

function MostPlayedAlbumNonRapStatistics() {
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
        <div style={{backgroundColor:'rgb(255,240,138)'}}>
              <div style={{padding: '5%'}}>
                <div style={{fontSize: '3rem'}}>
                    <h2>Most played non-Rap album is...</h2>
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
              <div style={{display:'flex', textAlign:'start', padding:'5%'}}>
                <img src={'https://best-fit.transforms.svdcdn.com/production/albums/frank-ocean-blond-compressed-0933daea-f052-40e5-85a4-35e07dac73df.jpg?w=1200&h=1200&q=100&auto=format&fit=crop&dm=1643652677&s=3f177eac28ab76a7197a764624863b2a'} style={{height:'35rem',width:'35rem'}}/>
                <div style={{marginLeft:'5rem'}}>
                  <h2 style={{fontSize:'7rem', marginTop:'0rem',marginBottom:'20px'}}>Blonde</h2>
                  <h2 style={{fontSize:'3rem',marginTop:'0rem'}}>by Frank Ocean</h2>
                  <h2 style={{fontSize:'2rem'}}>with 477 play counts</h2>
                  <h2 style={{fontSize:'2rem'}}>Most played track from the album is <a href="https://www.youtube.com/watch?v=r4l9bFqgMaQ" style={{color: 'red', textDecoration: 'none'}}>Nights</a> with 171 plays</h2>
                </div>
              </div>
            </div>
            <NonRapAlbumListening/>
        </div>
    )
}

export default MostPlayedAlbumNonRapStatistics;