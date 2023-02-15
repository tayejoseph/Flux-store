import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "../../hooks";
import Container from "./styles";

const TabNav = ({ tabItems }) => {
  const query = useQuery().get("tab");
  const { pathname: path } = useLocation();
  return (
    <Container className="flux-tab_nav">
      <ol>
        {tabItems.map((item) => (
          <li key={`tab-${item.toLowerCase()}`}>
            <Link
              to={`${path}?tab=${item.toLowerCase()}`}
              className={query === item.toLowerCase() ? "active" : ""}
            >
              {item}
            </Link>
          </li>
        ))}
      </ol>
    </Container>
  );
};

export default TabNav;
