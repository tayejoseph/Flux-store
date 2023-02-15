import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { formValidator } from "../../helpers";
import { Button, RadioButton, Modal, InputGroup } from "../../UI";
import { handleAirTimeTopUp } from "../../store/actions/app";
import { dataPlans } from "../../constants";
import Container from "./styles";

const AirTimeTopUp = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormState] = useState({
    amount: "",
    whoFor: "self",
    receiptNo: "",
  });

  const disabled = useMemo(
    () => !formData.amount || loading,
    [formData, loading]
  );

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
        document.forms["airtime-form"].getElementsByTagName("input")
      )
    ) {
      try {
        setLoading(true);
        const { receiptNo, amount, whoFor } = formData;
        await handleAirTimeTopUp({
          receiver: whoFor === "self" ? whoFor : receiptNo,
          amount,
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Flux | Airtime TopUp</title>
      </Helmet>
      <Modal
        showModal={true}
        className="modal-size_sm modal-close_relative"
        modalTitle={"Airtime Topup"}
      >
        <form onSubmit={handleSubmit} name="airtime-form" noValidate>
          <div className="form-inputs">
            <InputGroup
              placeholder={"Amount of Airtime"}
              name="amount"
              value={formData.amount}
              required={true}
              onChange={handleInput}
            />
            <p className="u-typo_normal u-color_light">Who is this for?</p>
            <InputGroup className="radio-btn_container">
              <label className="u-color_dark" for={"self"}>
                <RadioButton
                  type="radio"
                  name={"whoFor"}
                  id="self"
                  checked={formData.whoFor === "self" && true}
                  onChange={({ target }) =>
                    setFormState({
                      ...formData,
                      whoFor: target.checked ? "self" : "someoneElse",
                    })
                  }
                />
                My Self
              </label>
            </InputGroup>
            <InputGroup className="radio-btn_container">
              <label className="u-color_dark" for={"someone"}>
                <RadioButton
                  type="radio"
                  name={"whoFor"}
                  id="someone"
                  checked={formData.whoFor === "someoneElse" && true}
                  onChange={({ target }) =>
                    setFormState({
                      ...formData,
                      whoFor: target.checked ? "someoneElse" : "self",
                    })
                  }
                />
                Someone else
              </label>
            </InputGroup>
            <InputGroup>
              <select
                placeholder={"Network"}
                name="networkIndex"
                onChange={handleInput}
              >
                <option value="volvo" disabled={true}>
                  Select Recipient's Network
                </option>
                {dataPlans &&
                  dataPlans.map((item, index) => (
                    <option value={index} key={item.newort_code}>
                      {item.network_name.toUpperCase()}
                    </option>
                  ))}
              </select>
            </InputGroup>
            {formData.whoFor !== "self" && (
              <InputGroup
                placeholder={"Recipient's Number"}
                type="tel"
                name={"receiptNo"}
                value={formData.receiptNo}
                onChange={handleInput}
                required={true}
              />
            )}
          </div>
          <footer>
            <Button
              full
              type="submit"
              rounded
              loading={loading}
              disabled={disabled}
            >
              Top up
            </Button>
          </footer>
        </form>
      </Modal>
    </Container>
  );
};

export default AirTimeTopUp;
