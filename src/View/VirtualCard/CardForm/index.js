import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toMoney } from "../../../helpers";
import { Button, Modal, InputGroup } from "../../../UI";
import Container from "./styles";

const CardForm = ({ handleInput, formData }) => {
  const { userData } = useSelector((s) => s.user);

  const history = useHistory();
  return (
    <Container>
      <Modal
        className="modal-size_sm modal-close_relative"
        modalTitle={"Create a New Card"}
        showModal={true}
        onClose={() => history.push("/dashboard/virtualCard/")}
      >
        <div className="content-container">
          <section>
            <div className="top-section">
              <p className="u-typo_lgBody u-color_lighter">Wallet Balance</p>
              <hr />
              <p className="u-typo_lgBody">{`₦4${toMoney(
                userData.balance
              )}`}</p>
            </div>
            <p className="u-typo_lgBody u-color_light">
              How much would you like to fund your card with?
            </p>
            <InputGroup
              name="amount"
              type="number"
              value={formData.amount}
              placeholder="Enter Amount"
              required={true}
              autoFocus={true}
              onChange={handleInput}
            />
          </section>

          <section>
            <div class="section-item">
              <p className="u-typo_normal">Card Creation Fee</p>
              <p className="u-typo_normal">- ₦250.00</p>
            </div>
            <hr />
            <div class="section-item">
              <p className="u-typo_normal">Total Creditable</p>
              <p className="u-typo_normalBold">₦17,750.00</p>
            </div>
          </section>
          <section>
            <Button
              full
              disabled={!formData.amount ? true : false}
              onClick={() => history.push("/dashboard/virtualCard/cardView")}
            >
              Next
            </Button>
          </section>
        </div>
      </Modal>
    </Container>
  );
};

export default CardForm;
