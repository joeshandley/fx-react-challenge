import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/fxdigitallogo.png";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/">
          <h3 className="header__link">Home</h3>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
