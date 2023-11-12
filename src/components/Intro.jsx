import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

function Intro() {
  //returning the actual component
  return (
    <section className="introductory-statement">
      <Fade duration={1000} delay={500} distance="30px">
        <div className="intro-statement-text">
          Hello!
          <br />
          Thank you for clicking on my website.
          <br />
          My name is Dilini Ranaweera. I am a junior at the University of Pennsylvania. I am studying CS.
        </div>
      </Fade>

      <Fade duration={1000} delay={1000} distance="30px">
        <Link to="navigation-bar-wrapper" smooth duration={1000}>
          <a class="btn">
            Learn More About Me!
          </a>
        </Link>
      </Fade>
    </section>
  );
}

export default Intro;
