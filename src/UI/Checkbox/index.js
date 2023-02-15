import React from "react";
import Container from "./styles";

const Checkbox = ({ className, ...props }) => {
  return (
    <Container className={`flux-radion_btn ${className && className}`}>
      <input type="checkbox" {...props} />
      <span />
    </Container>
  );
};

export default Checkbox;
