import React from "react";
import "./header.css";

const Header = ({ text }) => {
  return (
    <header className="header">
      <h2 className="header__title">{text}</h2>
    </header>
  );
};

export default Header;
