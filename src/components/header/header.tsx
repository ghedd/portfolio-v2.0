// import { Link } from "gatsby";
import React from "react";
import HeaderStyles from "./header.module.scss";
import NavBar from "../navbar/navbar"
interface HeaderProp {
  siteTitle: string;
}

const Header: React.FC = () => {
  return (
    <header>
      <div className={HeaderStyles.headerContainer}>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
