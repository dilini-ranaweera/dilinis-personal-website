import React from "react";
import { Grid } from "@material-ui/core";
import ImageCarousel from "./ImageCarousel";

const PersonalProject = (props) => {
  return (
    <div className="about-me-wrapper">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h2 className="personal-project-header">{props.ProjectTitle}</h2>
          <p className="personal-project-description">
            {props.ProjectDescription}
          </p>
          <a class="personal-project-button">{props.ProjectButtonDescriptor}</a>
        </Grid>
        <Grid item xs={6}>
          <ImageCarousel />
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalProject;
