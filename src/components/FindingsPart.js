import React from "react";


function FindingsPart() {

    const findingsText = `
    The findings of the project has shown that I have spent overwhelming amount of time listening to music in the last 4 years. 
    Some of the results actually managed to surprise me. There was no doubt that my most listened genre is Hip-Hop but I wasn't expect to see
    Drake as the most listened artist in the last 4 years. Unexpectedly, my favorite Rap artist Eminem does not have much impact in the last 4 years,
    other than being the sixth most listened artist. Since my childhood, he has been my most played artist but these results has shown me that my music taste has shifted to 
    the new generation music. "Nights" by Frank Ocean being my most listened song, was actually expected, as I have been listening to it at long "night" sessions since
    its release. Even though I am a huge Hip-Hop fan, I was expecting much more diversity in my play history. I was expecting some Turkish artists, or Turkish-Pop as one of the
    highlighted genre, but they happen to take a very small portion in my playthrough. 2022 turned out to be the most "musified" year for me. And  2020 came out as the least musified year, as I didn't
    have much time to listen to music since I was preparing for university exam. The hyothesis test showed me that the latest releases do not have much impact on my listening habit. Frankly, I was expecting this result 
    because it requires for me some time to like the newly released music. For example, when Kanye West released "Donda" in 2021, I was not really a big fan of it and didn't play it that much. After a year, 
    I started to like it very much, and now I believe it is a great album. So, the effects of the newly released albums can be seen in the following years. 
    `;

    return (
        <div style={{backgroundColor:'rgb(253,247,228)'}}>
            <div style={{padding: '5%'}}>
                <div style={{fontSize: '3rem'}}>
                    <h2>Findings</h2>
                </div>
            </div>
            <div style={{paddingRight: '5%', paddingLeft: '5%',fontSize:'30px', paddingBottom:'5%', lineHeight:'3rem'}}>
                {findingsText}
            </div>
        </div>
    )
}

export default FindingsPart;