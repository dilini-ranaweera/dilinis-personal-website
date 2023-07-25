import React from "react";
import { Grid } from "@material-ui/core";
import WorkExperience from "./WorkExperience.jsx";
import Title from "./Title.jsx";

function WorkExperienceGrid() {
  return (
    <div className="work-grid-wrapper">
      <Title TitleName="My Work Experiences"/>
      <Grid container className="grid-container" spacing={2}>
          <Grid item xs={4} className="grid-item">
              <WorkExperience
                style={{ padding: "10px;" }}
                title="CIS 1600 Teaching Assistant"
                jobDescription="I am a Teaching Assistant for Mathematical Foundations of Computer Science. I am 
                     responsible for writing Homework Problems and Solutions, hosting weekly office hours, and 
                    teaching a recitation to 15+ students every week. Additionally, I assist in writing and 
                    grading exams."
                imagePath="images/discreteMath.jpg"
                websiteLink="https://www.cis.upenn.edu/~cis1600/current/"
              ></WorkExperience>
          </Grid>

          <Grid item xs={4} className="grid-item">
              <WorkExperience
                style={{ padding: "10px" }}
                title="Web Development Intern at SageFrog Marketing Group, LLC."
                jobDescription="In this summer internship, I coded websites in HTML, CSS, Javascript, and PHP. 
                    I also implemented websites in React.js with the company's existing Content Management System (CMS)
                    via an internal RestAPI. Additionally, I implemented source control procedures and pipelines for 
                    the majority of the company's websites."
                imagePath="images/SageFrog.jpg"
                websiteLink="https://www.sagefrog.com/"
              ></WorkExperience>
          </Grid>

          <Grid item xs={4} className="grid-item">
              <WorkExperience
                style={{ padding: "10px" }}
                title="Machine Learning Intern at the Center for Neuroimaging and Therapeutics"
                jobDescription="In the Summer of 2022, I was granted the Peer Undergraduate Research Mentorship (PURM)
                    stipend to complete biomedical research at the Center for Neuroimaging and Therapeutics.
                    I trained a Convolutional Neural Network (CNN) to detect Multiple Sclerosis (M.S.) lesions
                    in Low-Field Magnetic Resonance Images (MRI.)"
                imagePath="images/cnt.png"
                websiteLink="http://cnt.upenn.edu/"
              ></WorkExperience>
          </Grid>

          <Grid item xs={4} className="grid-item">
            <WorkExperience
              style={{ padding: "10px" }}
              title="Research Assistant at the Laboratory for Structural, Physiologic, and Functional Imaging (LSPFI)"
              jobDescription="I worked as a Research Assistant in LSPFI for 2 years, from May 2021 to May 2023. I worked on 
                a large amount of projects, ranging from creating Compressive Sensing Algorithms to decrease scan time in high-field MRI
                to manually segmenting Magnetic Resonance Images taken from both high field and low field MRI."
              imagePath="images/Perelman-School-Medicine.png"
              websiteLink="https://www.med.upenn.edu/lspfi/"
            ></WorkExperience>
          </Grid>

          <Grid item xs={4} className="grid-item">
            <WorkExperience
              style={{ padding: "10px" }}
              title="Data Science Intern at The World Bank"
              jobDescription="In the Summer of 2019, I created a K-Means Clustering Model that predicted the productivity of 
                Peruvian Hospitals based on a dataset provided by the World Bank. I presented this model in business meetings with
                Peruvian Government Officials."
              imagePath="images/workBank.jpg"
              websiteLink="https://www.worldbank.org/en/home"
            ></WorkExperience>
          </Grid>

          <Grid item xs={4} className="grid-item">
            <WorkExperience
              style={{ padding: "10px" }}
              title="Ivyline Capital Investment and Derivative Cohort"
              jobDescription="Taking courses in microeconomics, macroeconomicss, and other things."
              imagePath="images/ivyline.jpg"
              websiteLink="https://www.ivylinecapital.com/investment-and-derivative-program"
            ></WorkExperience>
          </Grid>
      </Grid>
    </div>
  );
}

export default WorkExperienceGrid;
