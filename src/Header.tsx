import React from "react";
import Logo from "./Logo";
import Articles from "./Articles";
import User from "./User";
import Search from "./Search";
import "./SCSS/header.scss";
const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="header-cta">
        <Search />
        <User />
      </nav>
    </header>
  );
};

export default Header;
