import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, RadioButton, Modal, InputGroup } from "../../UI";
import { handleDataTopUp } from "../../store/actions/app";
import { dataPlans } from "../../constants";
import { formValidator } from "../../helpers";
import Container from "./styles";

const DataTopUp = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormState] = useState({
    whoFor: "self",
    networkIndex: 0,
    activePlanIndex: 0,
    phoneNumber: "",
  });

  const handleInput = ({ target }) => {
    setFormState((s) => ({
      ...s,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formValidator(
        document.forms["airtimeTopUp-form"].getElementsByTagName("input")
      )
    ) {
      try {
        setLoading(true);
        const { networkIndex, whoFor, phoneNumber, activePlanIndex } = formData;
        await handleDataTopUp({
          plan_code: dataPlans[networkIndex].plans[activePlanIndex].plan_code,
          receiver: whoFor !== "self" ? phoneNumber : whoFor,
          network: dataPlans[networkIndex].network_name,
          amount: dataPlans[networkIndex].plans[activePlanIndex].amount,
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Flux | Data TopUp</title>
      </Helmet>
      <Modal
        showModal={true}
        className="modal-size_sm modal-close_relative"
        modalTitle={"Data Topup"}
      >
        <form onSubmit={handleSubmit} name="airtimeTopUp-form" noValidate>
          <div className="form-inputs">
            <InputGroup>
              <select
                placeholder={"Network"}
                name="networkIndex"
                onChange={handleInput}
              >
                <option disabled>Select Your Network</option>
                {dataPlans.map((item, index) => (
                  <option value={index} key={item.newort_code}>
                    {item.network_name.toUpperCase()}
                  </option>
                ))}
              </select>
              <p className="u-typo_smBody helper-text">
                {formData.networkIndex !== "" &&
                  dataPlans[formData.networkIndex].check_balance}
              </p>
            </InputGroup>
            <InputGroup>
              <select
                placeholder={"Data Plans"}
                name="activePlanIndex"
                onChange={handleInput}
              >
                {formData.networkIndex !== "" &&
                  dataPlans[formData.networkIndex].plans.map((item, index) => (
                    <option value={index} key={item.plan_code}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <p className="u-typo_smBody helper-text">
                All data plans last 30days unless otherwise indicated.
              </p>
            </InputGroup>
            <p className="u-typo_normal">Who is this for?</p>
            <InputGroup className="radio-btn_container">
              <label className="u-color_dark" for={"self"}>
                <RadioButton
                  type="radio"
                  value="self"
                  name={"whoFor"}
                  id="self"
                  onChange={handleInput}
                  checked={formData.whoFor === "self"}
                />
                Myself
              </label>
            </InputGroup>
            <InputGroup className="radio-btn_container">
              <label className="u-color_dark" for={"someone"}>
                <RadioButton
                  type="radio"
                  value="someoneElse"
                  name={"whoFor"}
                  id="someone"
                  onChange={handleInput}
                  checked={formData.whoFor === "someoneElse"}
                />
                Someone else
              </label>
            </InputGroup>
            {formData.whoFor !== "self" && (
              <InputGroup
                type="tel"
                name={"phoneNumber"}
                value={formData.phoneNumber}
                onChange={handleInput}
                required={true}
                placeholder={"Recipient's Number"}
              />
            )}
          </div>
          <footer>
            <Button full type="submit" rounded loading={loading}>
              Top up
            </Button>
          </footer>
        </form>
      </Modal>
    </Container>
  );
};

export default DataTopUp;
