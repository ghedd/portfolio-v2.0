import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import Brand from "../brand/brand";

import NavBarStyles from "./navbar.module.scss";

const NavBar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled: boolean =
        // as Gatsby renders component from server,
        // running 'gatsby build' throws an error because
        // 'window' is 'undefined'.
        // the below check helps avoiding such error
        // visit https://www.gatsbyjs.com/docs/debugging-html-builds/ for more details
        typeof window !== undefined ? window.scrollY > 10 : false;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
        console.log(scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // clean up the event handler when
      // the component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <div
      className={
        scrolled
          ? `${NavBarStyles.navBar}`
          : `${NavBarStyles.navBar} ${NavBarStyles.navBarUnscrolled}`
      }
    >
      <div className={NavBarStyles.navBarContainer}>
        <Brand />
        <div
          className={`
          ${NavBarStyles.navBarMenu} ${NavBarStyles.navBarTypography}
          `}
        >
          <a href="/#projects">projects</a>
          <a href="/#about">about</a>
          <a href="/#contact">contact</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
