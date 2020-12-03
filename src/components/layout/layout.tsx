/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby";

import Header from "../header/header";
// import HeroSection from "../hero/hero";
import LayoutStyles from "./layout.module.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {/* <HeroSection /> */}
      <main className={LayoutStyles.mainContainer}>{children}</main>
      <footer className={LayoutStyles.mainContainer}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  );
};

/* Layout.propTypes = {
  children: PropTypes.node.isRequired,
} */

export default Layout;
