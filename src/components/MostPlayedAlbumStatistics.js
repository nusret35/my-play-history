import React, {useState, useEffect, useRef} from "react";
import AlbumListening from "./AlbumListening";

function MostPlayedAlbumStatistics() {
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
        <div style={{backgroundColor:'rgb(248,190,153)'}}>
            <div style={{padding: '5%'}}>
                <div style={{fontSize: '3rem'}}>
                    <h2>Most played album is...</h2>
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
                <img src={'https://i.scdn.co/image/ab67616d0000b2732e02117d76426a08ac7c174f'} style={{height:'35rem',width:'35rem'}}/>
                <div style={{marginLeft:'5rem'}}>
                  <h2 style={{fontSize:'7rem', marginTop:'0rem',marginBottom:'20px'}}>Mr. Morale & The Big Steppers</h2>
                  <h2 style={{fontSize:'3rem',marginTop:'0rem'}}>by Kendrick Lamar</h2>
                  <h2 style={{fontSize:'2rem'}}>with 717 play counts</h2>
                  <h2 style={{fontSize:'2rem'}}>Most played track from the album is <a href="https://www.youtube.com/watch?v=toEW7_-pvOY" style={{color: 'red', textDecoration: 'none'}}>Father Time (feat. Sampha)</a> with 116 plays</h2>
                </div>
              </div>
            </div>
            <AlbumListening/>
        </div>
    )
}

export default MostPlayedAlbumStatistics;