import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="website-footer">
      <span className="up-top">
        <Link to="introductory-statement" smooth duration={1000}>
          <div className="test">Hello?</div>
        </Link>
      </span>
    </footer>
  );
}

export default Footer;
