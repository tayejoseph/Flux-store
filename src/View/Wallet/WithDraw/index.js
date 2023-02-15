import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { notify } from "react-notify-toast";
import { formValidator } from "../../../helpers";
import { Button, Modal, InputGroup, Spinner } from "../../../UI";
import { validateAccNo } from "../../../store/actions/app";
import { handleWithdrawal } from "../../../store/actions/user";
import { BankLists } from "../../../constants";
import Container from "./styles";

const initState = {
  loading: false,
  error: false,
  validated: false,
};
const WithDraw = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [{ loading, validated, error }, setDisplay] = useState(initState);

  const disabled = useMemo(
    () => loading || validated !== true || error,
    [loading, validated, error]
  );

  const [formData, setFormState] = useState({
    amount: "",
    acct_no: "",
    acct_name: "Account Name",
    bank_code: "",
  });

  const initBankValidation = useCallback(async () => {
    const { acct_no, amount, bank_code } = formData;
    if (acct_no && amount && bank_code) {
      try {
        setDisplay((s) => ({ ...s, validated: "validating" }));
        const { status, data: response } = await validateAccNo({
          account_no: acct_no,
          bank_code,
        });
        if (status === 200) {
          setDisplay((s) => ({ ...s, validated: true }));
          if (response.status === "error") {
            setDisplay((s) => ({ ...s, validated: true, error: true }));
            setFormState((s) => ({
              ...s,
              acct_name: "Invalid Account Number",
            }));
          } else {
            setDisplay((s) => ({ ...s, validated: true }));
            setFormState((s) => ({
              ...s,
              acct_name: response.data.account_name,
            }));
          }
        }
      } catch ({ response }) {
        setTimeout(() => {
          setDisplay((s) => ({ ...s, validated: true, error: true }));
          setFormState((s) => ({
            ...s,
            acct_name: "No internet connection",
          }));
        }, 100);
      }
    }
  }, [formData]);

  useEffect(() => {
    if (formData.acct_no.length === 10 && !validated) {
      initBankValidation();
    }
  }, [formData.acct_no, initBankValidation, validated]);

  const handleInput = ({ target }) => {
    if (target.name === "acct_no" && target.value.length === 10) {
      setDisplay((s) => ({ ...s, validated: false, error: false }));
    }
    setFormState((s) => ({
      ...s,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formValidator(
        document.forms["withdraw-form"].getElementsByTagName("input")
      )
    ) {
      try {
        setDisplay((s) => ({ ...s, loading: true }));
        const { status } = await dispatch(handleWithdrawal(formData));
        if (status === 200) {
          notify.show("Withdraw Successfull", "success");
          setTimeout(() => {
            history.push("/dashboard/wallet/summary");
          }, 500);
        }
      } finally {
        setDisplay((s) => ({ ...s, loading: false }));
      }
    }
  };

  return (
    <Container>
      <Modal
        showModal={true}
        className="modal-size_sm modal-close_relative"
        modalTitle={"Withdraw"}
      >
        <form onSubmit={handleSubmit} name="withdraw-form" noValidate>
          <div className="form-inputs">
            <p className="intro-txt">
              Enter the amount and account you wish to withdraw
            </p>
            <InputGroup
              placeholder={"₦0.00"}
              name="amount"
              type="number"
              onChange={handleInput}
              value={formData.amount}
            />
            <InputGroup>
              <select
                placeholder={"Network"}
                name="bank_code"
                onChange={handleInput}
              >
                <option value="" disabled={true}>
                  Select Recipient's Network
                </option>
                {BankLists.map((item, index) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </InputGroup>
            <InputGroup
              placeholder={"Account Number"}
              name="acct_no"
              type="number"
              onChange={handleInput}
              value={formData.acct_no}
            />
            {validated && (
              <div className="account-name">
                {validated === "validating" ? (
                  <Spinner />
                ) : (
                  <p className={error ? "u-status_error" : ""}>
                    {formData.acct_name}
                  </p>
                )}
              </div>
            )}
          </div>
          <footer>
            <Button
              full
              rounded
              loading={loading}
              disabled={disabled}
              type="submit"
            >
              Withdraw
            </Button>
          </footer>
        </form>
      </Modal>
    </Container>
  );
};

export default WithDraw;
