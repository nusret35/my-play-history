import React, {component} from 'react';


function MotivationPart(){

    const motivationText = `
    The motivation of this project is to analyze the highlights of my play history for the last 4 years. With this analysis, I was able to figure out the prominent actors that take a huge part in my listening course. I also wanted to figure out how the latest releases of my favorite artists have influenced my plays. 
    I always considered myself as an "etched in stone" listener, a Hip-Hop head, who has a pure taste in the genre and the one that always listens to timeless classics. 
    This analysis showed how I lapsed into the wave of mainstream music in reality. 
    Additionally, exploring the temporal patterns in my listening habits has allowed me to identify seasonal shifts and emotional trends reflected in my musical choices. Stay tuned, as there will be similar types of analysis upcoming to delve deeper into the nuances of my evolving musical journey.
    `;

    return (
        <div style={{backgroundColor:'rgb(248,190,153)'}}>
            <div style={{padding: '5%'}}>
                <div style={{fontSize: '3rem'}}>
                    <h2>Motivation of the project</h2>
                </div>
            </div>
            <div style={{paddingRight: '5%', paddingLeft: '5%',fontSize:'30px'}}>
                {motivationText}
            </div>
            <img style={{padding: '5%'}} src="https://images.squarespace-cdn.com/content/v1/5cf6c4ed5171fc0001b43190/1611069934488-IVPUR8YDTK9G6R7O3F16/paul.png"/>
        </div>
    )
}

export default MotivationPart;