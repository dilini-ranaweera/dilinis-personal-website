import React from 'react';
import Fade from "react-reveal/Fade";

function Title(props) {
    return (
        <Fade bottom duration={1000} delay={300}>
            <h2 className="title-class">{props.TitleName}</h2>
        </Fade>
    )
}

export default Title;