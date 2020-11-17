import React from "react";
import { Link } from "gatsby";
import MyBrand from "../../images/MyBrand.svg";
const Brand: React.FC = () => {
  return (
    <div>
      <Link to="/">
        <MyBrand />
      </Link>
    </div>
  );
};

export default Brand;
