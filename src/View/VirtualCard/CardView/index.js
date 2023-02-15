import React from "react";
import { useHistory } from "react-router";
import { Button, Modal, Card } from "../../../UI";
import Container from "./styles";

const CardView = ({ formData, loading, handleCreateCard }) => {
  const history = useHistory();

  return (
    <Container>
      <Modal
        className="modal-size_sm modal-close_relative"
        modalTitle={"Here’s what your card looks like"}
        showModal={true}
        onClose={() => history.push("/dashboard/virtualCard/")}
      >
        <div className="content-container">
          <section>
            <Card
              {...{
                cardNo: "",
                name: "",
                date: "",
                amount: "",
                card_style: formData.card_style,
              }}
            />
          </section>
          <footer>
            <Button rounded loading={loading} onClick={handleCreateCard}>
              I Like it, Finish
            </Button>
          </footer>
        </div>
      </Modal>
    </Container>
  );
};

export default CardView;
