import React, { useState, useEffect } from "react";
import Brand from "../brand/brand";

import NavBarStyles from "./navbar.module.scss";

const NavBar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
        console.log(scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <div
      className={
        scrolled
          ? `${NavBarStyles.navBar} `
          : `${NavBarStyles.navBar} ${NavBarStyles.navBarTop}`
      }
    >
      <Brand />
      <div className={NavBarStyles.navBarMenu}>
        <span>projects</span>
        <span>about</span>
        <span>contact</span>
      </div>
    </div>
  );
};

export default NavBar;
