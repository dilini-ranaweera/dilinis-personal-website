import React from "react";

function Intro() {
    
  //returning the actual component
  return (
    <section className="introductory-statement">
      <div className="intro-statement-text">
        Hello!
        <br />
        Thank you for clicking on my website.
        <br />
        My name is Dilini Ranaweera.
      </div>

      <div className="drop-down-button">
        <a class="btn" href="#about">
          Learn More
        </a>
      </div>
    </section>
  );
}

export default Intro;
