import React, {useState, useEffect, useRef} from "react";
import ContingencyTable from "./ContingencyTable";
import ScatterPlot from "./ScatterPlot";

function HypothesisTesting() {
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

    return(
        <div style={{ backgroundColor: 'rgb(205,238,237)' }}>
            <div style={{ padding: '5%' }}>
            <div style={{ fontSize: '3rem' }}>
              <h2>Hypothesis Testing</h2>
            </div>
            <div style={{"alignItems":"center"}}>
                <p style={{fontSize:'2rem'}}>
                    In this part, I am testing whether my playing habits influenced by the latest album and song releases. The hypothesis is tested by checking the release dates of the tracks that are played within a year. For example, 
                    if the played tracks in 2022 mostly consisted with the tracks that are released in 2022, it will contribute to the alternative hypothesis.
                </p>
                <h3 style={{paddingBottom:'2%'}}>Note: The tracks that are considered in this part are the only ones that are included in my Apple Music library. So there is some difference in play counts.</h3>
                <h2 style={{fontSize:'2rem'}}>Null Hypothesis: There is no influence of newly released tracks on my listening habit</h2>
                <h2 style={{fontSize:'2rem'}}>Alternative Hypothesis: There is an influence of newly released tracks on my listening habit</h2>
                <div style={{"display":"flex","justifyContent":"center"}}>
                    <ContingencyTable/>
                </div>
                <p style={{fontSize:'2rem', paddingTop:'5%'}}>
                    For the hypothesis test, I have used Pearson Correlation Coefficient.
                </p>
                <p style={{fontSize:'2rem'}}>
                    The significance value (α) = 0.05
                </p>
                <div style={{"display":"flex","justifyContent":"center"}}>
                    <ScatterPlot/>
                </div>
                <p style={{fontSize:'7rem'}}>
                    The results are...
                </p>
                <h2 style={{fontSize:'4rem'}}>Pearson Correlation Coefficient = 0.830 </h2>
                <h2 style={{fontSize:'4rem'}}>p-Value = 0.171 </h2>
                <h2 style={{fontSize:'4rem'}}>p-Value is bigger than α, meaning...</h2>
                <div
                ref={componentRef}
                className="fade-in-container"
                style={{
                    padding: '5%',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 1.5s ease-in-out',
                }}
                >
                    <img style={{height:'20%', width:'60%'}} src='https://www.mememaker.net/static/images/memes/4782053.jpg'/>
                    <p style={{fontSize:'2rem', paddingTop:'5%'}}>
                        Newly released tracks do not significantly increase the amount of time that I listen to music. There is no apparent correlation between them. So we cannot reject the null hypothesis.
                    </p>
                </div>

            </div>

          </div>
        </div>
    )
}

export default HypothesisTesting;