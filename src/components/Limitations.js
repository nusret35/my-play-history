import React from "react";


function Limitations() {

    const text = `
        As I was indicated in the beginning, there were some limitations during analysis, in terms of gathering release dates and album names of the played tracks. 
        Fortunately, I found a way to work around the tracks that are included in my library but the ones that are not included was happened to be discarded in some cases. 
        This issue could have been solved by gathering all the data of the played tracks by making requests to Apple Music APIs but these APIs require Apple Developer license, which 
        has a annual price of $100. Maybe, I could have just paid it for the sake of the project since I aim to continue working on it. I believe this project will reflect the steer of my music taste
        throughtout the years. In future, I will develop a personal mobile application where I can view these data directly from it. It will be my own Apple Music Replay, with much more insight!
    `;


    return (
        <div style={{backgroundColor:'black'}}>
            <div style={{padding: '5%'}}>
                <div style={{fontSize: '3rem', color:'white'}}>
                    <h2>Limitations & Future Work</h2>
                </div>
            </div>
            <div style={{color:'white', paddingRight: '5%', paddingLeft: '5%',fontSize:'30px', paddingBottom:'5%', lineHeight:'3rem'}}>
                {text}
            </div>
            <img style={{padding:'10%', width:'60%'}} src="https://www.sihirlielma.com/wp-content/uploads/2022/11/apple-music-replay-2022-1.jpg"/>
        </div>
    )


}


export default Limitations;