import React from "react";
import { InputGroup } from "../../UI";

const PasswordForm = ({ handleInput }) => {
  return (
    <div>
      <InputGroup
        label={"Old Password"}
        placeholder={"**********"}
        name="oldPassword"
        type={"password"}
        onChange={handleInput}
      />
      <InputGroup
        label={"New Password"}
        placeholder={"**********"}
        name="newPassword"
        type={"password"}
        onChange={handleInput}
      />
      <InputGroup
        label={"Confirm New Password"}
        placeholder={"**********"}
        name="confirmPassword"
        type={"password"}
        onChange={handleInput}
      />
    </div>
  );
};

export default PasswordForm;
