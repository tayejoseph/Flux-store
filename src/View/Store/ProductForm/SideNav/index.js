import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./styles";

const SideNav = ({ disabled }) => {
  const { pathname, state } = useLocation();
  return (
    <Container>
      <nav>
        <Link
          className={`${
            !state || state?.section === "infoForm" ? "active" : ""
          }`}
          to={{
            pathname,
            state: { section: "infoForm" },
          }}
        >
          <span className="u-typo_normal u-color_light">Product Details</span>
        </Link>
        <Link
          className={`${state?.section === "uploadForm" ? "active" : ""} ${
            disabled ? "disable-link" : ""
          }`}
          to={{
            pathname,
            state: { section: "uploadForm" },
          }}
        >
          <span className="u-typo_normal u-color_light">Product Images</span>
        </Link>
      </nav>
    </Container>
  );
};

export default SideNav;
