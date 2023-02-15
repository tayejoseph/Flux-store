import React from "react";
import Container from "./styles";

const RadioButton = ({ name, checked, onChange, ...props }) => {
  return (
    <Container className="radio_input">
      <input
        {...props}
        type="radio"
        name={name ? name : "radio"}
        checked={checked}
        onChange={(e) => {
          if (typeof onChange === "function") {
            onChange(e);
          }
        }}
      />
      <span className="radio_control" />
    </Container>
  );
};

export default RadioButton;
