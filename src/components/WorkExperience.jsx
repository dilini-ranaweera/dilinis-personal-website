import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  imageContainer: {
    width: "90%", 
    height: "50%",
    borderRadius: "50%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    marginBottom: "4.25em",
	  border: "2px solid black",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const WorkExperience = (props) => {
  const classes = useStyles();

  return (
      <section className="box">
        <div className={classes.imageContainer}>
          <img className={classes.image} src={props.imagePath} alt="" />
        </div>
        <header>
          <h3>{props.title}</h3>
        </header>
        <p>{props.jobDescription}</p>
        <footer>
          <ul className="actions">
            <li>
              <a
                href={props.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button alt"
              >
                Click here to see the associated website!
              </a>
            </li>
          </ul>
        </footer>
      </section>
  );
};

export default WorkExperience;


