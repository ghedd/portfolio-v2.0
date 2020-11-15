import { Link } from "gatsby";
import React, { useState } from "react";
import HeaderStyles from "./header.module.scss";
interface HeaderProp {
  siteTitle: string;
}

const Header: React.FC<HeaderProp> = ({ siteTitle = "" }) => {
  const [checkedValue, setCheckValue] = useState<boolean>(false);
  console.log(checkedValue);

  const handleCheckboxChange = () => {
    setCheckValue(!checkedValue);
  };

  return (
    <header
      className={`${
        checkedValue === false
          ? HeaderStyles.headerContainer
          : HeaderStyles.headerContainerBlue
      } `}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 className={HeaderStyles.headerTypography}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <label>
          <input type="checkbox" onChange={() => handleCheckboxChange()} />
        </label>
      </div>
    </header>
  );
};

export default Header;
