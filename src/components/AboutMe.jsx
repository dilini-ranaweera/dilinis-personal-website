import React from 'react';
import { Grid} from '@material-ui/core';

function AboutMe() {

    return (
        <div className="about-me-wrapper">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                        <img className="image-class"
                            src="me.jpg" alt="Dilini Ranaweera text"></img>
                    
                    
                </Grid>

                <Grid item xs={6}>
                    <p className="about-me-text">
                        I am a rising third-year student at the University of Pennsylvania,
                         and I am an alumni of Seneca Valley Senior High School. I am studying
                         Computer Science, with minors in Mathematics and Statistics. I love learning
                         about anything Computer Science - from Front-end Web Development to Machine Learning
                         to Web3, I aspire to learn it all. <br/> <br/>

                         In addition to my desire to learn Computer Science, I am extremely passionate about 
                         Mathematics and Mathematics education. My love for math has lead me to become a 
                         Discrete Mathematics for Computer Science Teaching Assistant (CIS 1600 TA), and join
                         the Executive Board for the Bridge to Mathematics club. <br /> <br/>
                         
                         In my free time, I like to play chess, read articles on fashion history, and watch 
                         cartoon TV shows. My favorite chess opening is The Caro-Kann, my favorite era of fashion was the '90s,
                         and my favorite cartoon TV show is Bojack Horseman. <br /> <br/>

                         I don't really know what the fuck my endgoal is. But I'm here to find out.
                         </p>
                </Grid>
        </Grid>

        </div>
    )
}

export default AboutMe;