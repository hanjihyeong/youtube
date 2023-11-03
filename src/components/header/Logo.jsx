import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ toggleMenu }) => {
  return (
    <h1 className="header__logo">
      <Link to="/">
        <em aria-hidden="true" onClick={toggleMenu}></em>
        <span>
          Scott
          <br />
          YOUTUBE
        </span>
      </Link>
    </h1>
  );
};

export default Logo;
