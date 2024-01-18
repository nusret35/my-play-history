import React, {useState, useEffect, useRef} from "react";
import NonRapArtistListening from "./NonRapArtistListening";

function MostListenedTtacksAtEachHour() {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);
    const data = {
        '00:00': 'Nights - Frank Ocean(10)',
        '01:00': 'FEAR. - Kendrick Lamar(9)',
        '02:00': 'l e t . g o . m y . h a n d - J.Cole(5)',
        '03:00': 'Wings - Mac Miller(4)',
        '04:00': 'Champagne Poetry - Drake(7)',
        '05:00': 'goosebumps - Travis Scott(8)',
        '06:00': 'Nonstop - Drake(6)',
        '07:00': 'DUCKWORTH. - Kendrick Lamar(8)',
        '08:00': 'Work Out - J.Cole(10)',
        '09:00': 'Work Out - J.Cole(13)',
        '10:00': 'All We Got (feat. Kanye West & Chicago Children\'s Choir) - Chance the Rapper(11)',
        '11:00': 'Magnolia - Playboi Carti(19)',
        '12:00': '911 / Mr. Lonely (feat. Frank Ocean & Steve Lacy) - Tyler, the Creator(13)',
        '13:00': 'Nights - Frank Ocean(20)',
        '14:00': '911 / Mr. Lonely (feat. Frank Ocean & Steve Lacy) - Tyler, the Creator(17)',
        '15:00': 'No Role Modelz - J.Cole(14)',
        '16:00': 'Neighbors - J.Cole(16)',
        '17:00': 'Champagne Poetry - Drake(15)',
        '18:00': 'Nights - Frank Ocean(9)',
        '19:00': 'm y . l i f e - J.Cole(13)',
        '20:00': 'Magnolia - Playboi Carti(17)',
        '21:00': 'Magnolia - Playboi Carti(16)',
        '22:00': 'No Role Modelz - J.Cole(12)',
        '23:00': 'i - Kendrick Lamar(13)'
    };
    
    useEffect(() => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
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
        <div style={{ backgroundColor: 'rgb(235,234,234)' }}>
          <div style={{ padding: '5%' }}>
            <div style={{ fontSize: '3rem' }}>
              <h2>Most played songs at each hour</h2>
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
          </div>
          <div style={{ padding: '5%' }}>
            <ul>
              {Object.entries(data).map(([hour, track]) => (
                <div key={hour} style={{fontSize:'2rem', marginBottom:'6rem'}}>
                  <div className="time-font" style={{fontWeight:'bold'}}>{`${hour} `}</div>
                  <div style={{fontWeight:'400'}}>{`${track}`}</div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      );
    }

export default MostListenedTtacksAtEachHour;