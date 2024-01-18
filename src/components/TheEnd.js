import React, {useState, useEffect, useRef} from "react";


function TheEnd() {
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
        <div style={{ position: 'relative', height: '100%', width: '100%' }}>
          <img
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            src="https://wallpapers.com/images/featured/kanye-west-saint-pablo-doziweiliyjwtmox.jpg"
            alt="Background"
          />
          <div
            ref={componentRef}
            className="fade-in-container"
            style={{
              padding: '5%',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1, 
              color: 'white', 
              fontSize: '30px', 
              fontWeight: 'bold', 
            }}
          >
            THE END
          </div>
        </div>
      );
}

export default TheEnd;