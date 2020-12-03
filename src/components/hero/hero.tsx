import React, { FC } from "react";
import HeroStyles from "./hero.module.scss";
// import HeroImg from "../../images/Hero.png";
import HeroImage from "../image/heroImage";

const HeroSection: FC = () => {
  return (
    <div className={HeroStyles.heroSection}>
      <div className={HeroStyles.heroSectionText}>
        <h1>Hahahahahaha hahahaha</h1>
      </div>
      {/* <div className={HeroStyles.heroImage}>
        <HeroImage />
      </div> */}
    </div>
  );
};

export default HeroSection;
