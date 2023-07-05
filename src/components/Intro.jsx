import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Intro() {

    const buttonStyle = {
        color: 'white'
      };

    //returning the actual component  
    return (
        <section className="introductory-statement">
            <div className="intro-statement-text">
                 Hello! Thank you for clicking on my website. My name is 
                    Dilini Ranaweera. 
            </div>
            
            <div className="drop-down-button">
                <IconButton aria-label="delete" size="large" style={buttonStyle}>
                    <ArrowDownwardIcon />
                </IconButton>
            </div>
        </section>
    )
}

export default Intro;