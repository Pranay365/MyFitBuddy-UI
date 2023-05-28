import React from "react";
import Logo from "./Logo";
import Articles from "./Articles";
import Features from "./Features";
import User from "./User";
import Search from "./Search";
import "./SCSS/Header.scss";
const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
      <Articles className="header-item" />
      <Features className="header-item" />
      <Search className="header-item" />
      <User  className="header-item" />
    </header>
  );
};

export default Header;
