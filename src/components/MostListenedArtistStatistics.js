import React, {useState, useEffect, useRef} from "react";
import ArtistListening from "./ArtistListening";

function MostListenedArtistStatistics() {
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
        <div style={{backgroundColor:'rgb(222,250,222)'}}>
              <div style={{padding: '5%'}}>
                <div style={{fontSize: '3rem'}}>
                    <h2>In last 4 years, I have been listening to mostly...</h2>
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
                <img src={'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/1b/71/65/1b716513-b0c1-9c6b-45aa-cbb9198248cc/01607cf1-1d52-43d2-84ce-d6fc1f4a3475_ami-identity-7665599cc626d803af7956b3691905e7-2022-11-30T21-07-19.526Z_cropped.png/486x486bb.png'} style={{height:'35rem',width:'35rem'}}/>
                <div style={{marginLeft:'5rem'}}>
                  <h2 style={{fontSize:'7rem'}}>Drake</h2>
                  <h2 style={{fontSize:'3rem'}}>with 2623 play counts</h2>
                  <h2 style={{fontSize:'3rem'}}>Most played Drake track is <a href="https://www.youtube.com/watch?v=IxVuT8cgccM" style={{color: 'red', textDecoration: 'none'}}>Champagne Poetry</a> with 112 plays</h2>

                </div>
              </div>
            </div>
            <ArtistListening/>
        </div>
    )
}

export default MostListenedArtistStatistics;