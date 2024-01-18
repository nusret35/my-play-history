import React, {useState, useEffect, useRef} from "react";
import NonRapArtistListening from "./NonRapArtistListening";

function MostListenedArtistNonRapStatistics() {
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
        <div style={{backgroundColor:'rgb(44,188,201)'}}>
              <div style={{padding: '5%'}}>
                <div style={{fontSize: '3rem'}}>
                    <h2>Most played non-Rap artist is...</h2>
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

                <img src={'https://www.dolby.com/globalassets/consumer/the-weeknd/the_weeknd.jpg'} style={{height:'40rem',width:'45rem'}}/>
                <div style={{marginLeft:'5rem'}}>
                    <h2 style={{fontSize:'7rem'}}>The Weeknd</h2>
                    <h2 style={{fontSize:'3rem'}}>with 947 play counts</h2>
                    <h2 style={{fontSize:'3rem'}}>Most played The Weeknd track is <a href="https://www.youtube.com/watch?v=rbb-_YU2S4c" style={{color: 'white', textDecoration: 'none'}}>Heartless</a> with 65 plays</h2>
                </div>
              </div>
            </div>
            <NonRapArtistListening/>
        </div>
    )
}

export default MostListenedArtistNonRapStatistics;