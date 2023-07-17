import React from "react";
import { Link } from "react-scroll";
import { IconButton } from "@material-ui/core";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function Footer() {
  return (
    <footer className="website-footer">
      <h3 className="footer-class">Contact Me!</h3>
      <span className="footer-text">
        {" "}
        Want to get in touch? Click the button below and let's chat :){" "}
      </span>
      <br />
      <span className="up-top">
        <Link to="introductory-statement" smooth duration={1000}>
          <IconButton>
            <KeyboardDoubleArrowUpIcon />
          </IconButton>
        </Link>
      </span>
    </footer>
  );
}

export default Footer;
