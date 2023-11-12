import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import HardwareIcon from "@mui/icons-material/Hardware";
import ScienceIcon from "@mui/icons-material/Science";
import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  appBar: {
    flexGrow: 1, // Expand to fill available space
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between", // Align items with equal spacing between them
  },
}));

function NavBar() {
  const classes = useStyles();
  const [isComponentAboveVisible, setIsComponentAboveVisible] = useState(true);

  // useEffect(() => {
  //   // Function to check if the component above the navbar is still visible
  //   const checkComponentAboveVisibility = () => {
  //     const componentAbove = document.getElementById("about-me");
  //     if (componentAbove) {
  //       const { bottom } = componentAbove.getBoundingClientRect();
  //       setIsComponentAboveVisible(bottom > 0);
  //     }
  //   };

  //   // Attach the event listener to check visibility on scroll
  //   window.addEventListener("scroll", checkComponentAboveVisibility);

  //   // Remove the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", checkComponentAboveVisibility);
  //   };
  // }, []);

  return (
    <div className="navigation-bar-wrapper">
      <div className={`navbar ${isComponentAboveVisible ? "" : "sticky"}`}>
        <AppBar position="static" color="#ffffff" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Link to="work-experiences-title" smooth duration={1000}>
              <Button color="inherit" startIcon={<HardwareIcon />}>
                {" "}
                Work Experiences{" "}
              </Button>
            </Link>
            <Link to="personal-project-title" smooth duration={1000}>
              <Button color="inherit" startIcon={<ScienceIcon />}>
                {" "}
                Personal Projects
              </Button>
            </Link>
            <Button color="inherit" startIcon={<ArticleIcon />}>
              Resume
            </Button>
            <a
              href="https://www.linkedin.com/in/dilini-ranaweera-295418220/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="black" startIcon={<LinkedInIcon />}>
                LinkedIn
              </Button>
            </a>
            <a
              href="https://github.com/dilini-ranaweera"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="black" startIcon={<GitHubIcon />}>
                GitHub
              </Button>
            </a>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default NavBar;
