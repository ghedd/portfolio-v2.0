import React from "react";
import { Link } from "gatsby";
import useWindowSize from "../../utils/useWindowSize";
import MyBrand from "../../images/MyBrand.svg";
import MyBrandMobile from "../../images/MyBrand_mobile.svg";
import BrandStyles from "./brand.module.scss";
const Brand: React.FC = () => {
  const { width } = useWindowSize();
  if (width < 800) {
    return (
      <div
        className={`${BrandStyles.brandResponsive} ${BrandStyles.brandResponsiveMobile}`}
      >
        <Link to="/">
          <MyBrandMobile />
        </Link>
      </div>
    );
  }
  return (
    <div className={BrandStyles.brandResponsive}>
      <Link to="/">
        <MyBrand />
      </Link>
    </div>
  );
};

export default Brand;
