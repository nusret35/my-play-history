import React, { useState, useEffect, useRef } from 'react';

function GeneralStatistics() {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);
    const detailStat = useRef(null);
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust as needed, represents the percentage of the target element that needs to be visible to trigger the callback
      };
  
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('is visible');
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
        <div style={{backgroundColor:'rgb(255,235,184)',}}>
          <div ref={componentRef}></div>
            <div
            className="fade-in-container"
            style={{
                padding: '5%',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
            }}
            >
                <div style={{ padding: '5%'}}>
                    <div style={{ fontSize: '3rem' }}>
                        <h2>From January 1, 2020, to November 14, 2023, I have spent...</h2>
                        <div style={{ display: 'flex', textAlign: 'center' }}>
                            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
                            <CountUpAnimation unit="hours" endValue={1882} duration={2000} />
                            <h2 style={{ fontSize: '10rem', fontWeight: '400' }}> or </h2>
                            <CountUpAnimation unit="days" endValue={78} duration={2000} />
                            </div>
                        </div>
                        <h2>listening to music.</h2>
                        <div style={{textAlign:'start',padding:'5rem'}}>
                            <div style={{display:'flex'}}>
                                <h2 style={{marginRight:'7rem'}}>
                                    Average daily listen:
                                </h2>
                                <h2 style={{color: 'rgb(216,79,79)'}}>
                                        80.76 minutes
                                </h2>
                            </div>
                            <div style={{display:'flex'}}>
                                <h2 style={{marginRight:'7rem'}}>
                                    Standard deviation:
                                </h2>
                                <h2 style={{color: 'rgb(216,79,79)'}}>
                                        59.84 minutes
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default GeneralStatistics;

const CountUpAnimation = ({ unit, endValue, duration }) => {
    const [count, setCount] = useState(0);
    const startTimestamp = useRef(null);
    const targetRef = useRef(null);
  
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          start();
          observer.unobserve(entry.target);
        }
      });
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1, // Adjust as needed
      });
  
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
  
      return () => {
        observer.disconnect();
        startTimestamp.current = null;
      };
    }, []);
  
    const start = () => {
      startTimestamp.current = null;
      requestAnimationFrame(update);
    };
  
    const update = (timestamp) => {
      if (!startTimestamp.current) {
        startTimestamp.current = timestamp;
      }
  
      const progress = (timestamp - startTimestamp.current) / duration;
      
      var currentCount = Math.floor(progress * endValue);

      if (currentCount > endValue){
        currentCount = endValue
      }
  
      setCount(currentCount);
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
  
    return (
      <div ref={targetRef}>
        <div style={{ fontSize: '9rem', fontWeight: '700', color:'rgb(216,79,79)' }}>{count}</div>
        <div style={{ fontSize: '9rem', fontWeight: '400' }}>{unit}</div>
      </div>
    );
  };
  