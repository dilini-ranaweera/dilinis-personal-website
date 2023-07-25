import React from "react";
import PersonalProject from "./PersonalProject";
import Title from "./Title.jsx";

function PersonalProjectWrapper() {
    const customStyle = {
        marginLeft: "1.3%"
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
        ProjectImageArray={[
          {
            src: "images/CreativeCodingPlusPhotoOne.jpg",
            alt: "First Instagram Post",
          },
          {
            src: "images/CreativeCodingPlusPhotoTwo.jpg",
            alt: "First Roundtable Post",
          },
        ]}
      ></PersonalProject>
      <h3 style={customStyle}> More to Come Soon!</h3>
    </div>
  );
}

export default PersonalProjectWrapper;
