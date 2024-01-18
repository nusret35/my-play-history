import React, {useState, useEffect, useRef} from "react";
import GenreListening from "./GenreListening";

function MostPlayedGenreStatistics() {
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
        <div style={{backgroundColor:'rgb(203,227,226)'}}>
              <div style={{padding: '5%'}}>
                <div style={{fontSize: '3rem'}}>
                    <h2>Most played genre is...</h2>
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

                <img src={'https://media.newyorker.com/photos/59097dddebe912338a378b68/master/pass/Trammell-Jay-Z-Kanye.jpg'} style={{height:'35rem',width:'45rem'}}/>
                <div style={{marginLeft:'5rem'}}>
                    <h2 style={{fontSize:'7rem'}}>Hip-Hop/Rap</h2>
                    <h2 style={{fontSize:'3rem'}}>with taking 65.9% of my listening</h2>
                </div>
              </div>
            </div>
            <GenreListening/>
        </div>
    )
}

export default MostPlayedGenreStatistics;