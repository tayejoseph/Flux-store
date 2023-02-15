import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, InputGroup, Spinner } from "../../UI";
import { sendMoney, validateFluxId } from "../../store/actions/user";
import { formValidator } from "../../helpers";
import Container from "./styles";

const initState = {
  loading: false,
  error: false,
  validated: false,
};
const SendMoney = () => {
  const dispatch = useDispatch();
  const [{ loading, validated, error }, setDisplay] = useState(initState);
  const [formData, setState] = useState({
    amount: "",
    receiver: "",
    receiveName: "",
    description: "",
  });
  const disabled = useMemo(
    () => !formData.amount || !formData.receiver || loading,
    [formData, loading]
  );

  const handleValidateTag = async () => {
    if (formData.receiver) {
      setDisplay((s) => ({ ...s, validated: "validating" }));

      try {
        const { response, status } = await validateFluxId(formData.receiver);
        if (status === 200) {
          setDisplay((s) => ({ ...s, validated: true }));
          setState((s) => ({ ...s, receiveName: response.full_name }));
        }
        console.log(response, "sdjksjskj");
      } catch {
        setDisplay((s) => ({ ...s, validated: false }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formValidator(
        document.forms["sendMoney-form"].getElementsByTagName("input")
      )
    ) {
      try {
        setDisplay((s) => ({ ...s, loading: true }));
        const { receiveName, amount, ...rest } = formData;
        const response = await dispatch(
          sendMoney({ amount: Number(amount), ...rest })
        );
        console.log(response, "dksdslk");
      } finally {
        setDisplay((s) => ({ ...s, loading: false }));
      }
    }
  };
  const handleInput = ({ target }) => {
    if (target.name === "receiver") {
      setDisplay(initState);
    }
    setState((s) => ({
      ...s,
      [target.name]: target.value,
    }));
  };

  return (
    <Container>
      <Modal
        showModal={true}
        className="modal-size_sm modal-close_relative"
        modalTitle={"Send Money"}
      >
        <form onSubmit={handleSubmit} name="sendMoney-form" noValidate>
          <div className="form-inputs">
            <InputGroup
              placeholder={"Amount to send"}
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInput}
            />
            <InputGroup
              placeholder={"Flux ID or Flux tag (e.g @snapdragon)"}
              name="receiver"
              onChange={handleInput}
              value={formData.receiver}
              onBlur={handleValidateTag}
            />
            {validated && (
              <div className="flux-name">
                {validated === "validating" ? (
                  <Spinner />
                ) : (
                  <p className={error ? "u-status_error" : ""}>
                    {formData.receiveName}
                  </p>
                )}
              </div>
            )}
            <InputGroup
              placeholder={"Description"}
              name="description"
              value={formData.description}
              onChange={handleInput}
            />
          </div>
          <footer>
            <Button
              full
              type="submit"
              rounded
              loading={loading}
              disabled={disabled}
            >
              Send
            </Button>
          </footer>
        </form>
      </Modal>
    </Container>
  );
};

export default SendMoney;
