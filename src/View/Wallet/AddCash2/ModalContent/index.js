import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { HiMinusCircle } from "react-icons/hi";
import { RadioButton, Button, Spinner } from "../../../../UI";
import Container from "./styles";

const ModalContent = ({ displaySection, cardLists }) => {
  return (
    <Container>
      <div className="content-container">
        {displaySection === "card" ? (
          !cardLists ? (
            <div className="spinner-container">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="card-container">
                {[...Array(3).keys()].map(() => (
                  <div className="card-item">
                    <div>
                      <RadioButton name={"card"} />
                    </div>
                    <div>
                      <p>5399 XXXX XXXX 4568</p>
                    </div>
                    <div>
                      <Button icon className="remove-btn">
                        <HiMinusCircle />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="addCard-btn_container">
                <Button tertiary iconLeft>
                  <MdAddCircleOutline />
                  Add Card
                </Button>
              </div>
            </>
          )
        ) : (
          <div className="transfer-container">
            <div className="accNo-container">
              <p>Please pay into this bank account</p>
              <h2>356 3475 345</h2>
              <h4>GT Bank</h4>
            </div>
          </div>
        )}
      </div>
      <footer>
        <div className="summary-container">
          <p>Amount Due</p>
          <p>₦0.00</p>
        </div>
        <div className="btn-container">
          <Button full rounded>
            {displaySection === "card" ? "Pay" : "I've Paid"}
          </Button>
        </div>
      </footer>
    </Container>
  );
};

export default ModalContent;
