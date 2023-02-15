import React from "react";
import { Button, Modal, InputGroup } from "../../../UI";
import Container from "./styles";

const ModalSendMoney = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Modal
        showModal={true}
        className="modal-size_sm modal-close_relative"
        modalTitle={"Send Money"}
      >
        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <InputGroup>
              <input placeholder={"Amount to send"} type="number" />
            </InputGroup>
            <InputGroup>
              <input placeholder={"Flux ID or Flux tag (e.g @snapdragon)"} />
            </InputGroup>
            <InputGroup>
              <input placeholder={"Receiver’s name"} />
            </InputGroup>
            <InputGroup>
              <input placeholder={"Description"} />
            </InputGroup>
          </div>
          <footer>
            <Button full type="submit" rounded>
              Send
            </Button>
          </footer>
        </form>
      </Modal>
    </Container>
  );
};

export default ModalSendMoney;
