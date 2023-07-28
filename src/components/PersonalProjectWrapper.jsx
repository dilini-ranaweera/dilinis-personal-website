import React from "react";
import PersonalProject from "./PersonalProject";
import Title from "./Title.jsx";

function PersonalProjectWrapper() {
  const customStyle = {
    marginLeft: "1.3%",
  };
  return (
    <div className="personal-project-wrapper">
      <Title TitleName="My Personal Projects" />
      <PersonalProject
        ProjectTitle="Creative Coding+ (CC+) Co-Founder, CFO, and Content Instructor"
        ProjectDescription="After sitting in Berger Auditorium for over 10 hours (completing 
                discrete mathematics homework, of course), a group of friends and I realized that there
                were little to no spaces at Penn to learn/pursue coding without pressure or barriers to entry.
                Furthermore, there were even fewer spaces to discuss the troubles of studying a field as difficult as 
                Computer Science.As a result, the idea for CC+ was born: A Completely Open-Membership club that offers
                workshops on technical skills, opportunities to use those skills through personal projects, and round-table
                style events for members to discuss their feelings surrounding Computer Science. CC+ became an official
                club at Penn in January 2023, and we are incredibly excited to see what this next semester will
                bring us :)"
        ProjectButtonDescriptor="Click this button to see CC+'s website!"
        PersonalProjectImagePath="CreativeCodingPlusPhotoOne.jpg"
        PersonalProjectImageDescription="Creative Coding+ first Instagram post"
        ProjectButtonLink="https://creativecoding.neocities.org/"
      ></PersonalProject>
      <PersonalProject
        ProjectTitle="This Website! :)"
        ProjectDescription="This website is one of my personal projects. It is built
      using React.js, the Material UI Framework, react-reveal, and Bootstrap CSS Framework. This
      website has given me a chance to design and implement a website with flexible and dynamic mobile 
      design. I cannot wait to update this website as my experiences and achievments grow."
        ProjectButtonDescriptor="Click here to see the source code of this website!"
        ProjectButtonLink="https://github.com/dilini-ranaweera/dilinis-personal-website/tree/master"
        PersonalProjectImagePath="meme.jpg"
        PersonalProjectImageDescription="A silly meme that functions as a practical joke."
      ></PersonalProject>
      <h3 style={customStyle}> More to Come Soon!</h3>
    </div>
  );
}

export default PersonalProjectWrapper;
