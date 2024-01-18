import React from "react";


function DataSource() {

    const text = `
        I have gathered my Apple Music data by requesting it from Apple itself. Apple
        sends all the media usage data upon the user request. It has taken a week for them to 
        prepare and deliver the Apple Music data. Here is the link to request all Apple usage data: ${"https://privacy.apple.com/"}.
        Play history is a CSV file containing the data of every played track (song name, artist, played time and etc). But unfortunately it does not include
        the released date and album name of the track that is played. In order to gather these data, I used tracks.json file, where it contains the released year and album name of the tracks
        that are included in my library. Therefore, not every track that I played during this course has the data of released year, genre and album name. So, for the analysis that need to consider those data (ex. like the hypothesis testing that you will see), 
        I had to drop the ones that does not have them. I believe imputation of these data would not be the right thing to do, as every track is most probably very distinct from each other.
    `;

return (
    <div style={{ backgroundColor: 'rgb(249,218,228)'}}>
        <div style={{ padding: '5%' }}>
            <div style={{ fontSize: '3rem' }}>
                <h2>Data Source</h2>
            </div>
        </div>
        <div style={{ paddingRight: '5%', paddingLeft: '5%', fontSize: '30px' }}>
            {text}
        </div>
        <img style={{padding:'5%'}} src="https://help.apple.com/assets/653FC7A6F2A30435A0022CB1/653FC7AAF2A30435A0022CB7/en_US/14afc11a08e3fe617b2404ee08a0d0af.png" />
    </div>
);


}

export default DataSource;