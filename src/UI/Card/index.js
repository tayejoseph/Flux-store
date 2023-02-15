import React from "react";
import Container from "./styles";
import card1 from "../../assets/card1.webp";
import card2 from "../../assets/card2.webp";
import card3 from "../../assets/card3.webp";
import masterCard from "../../assets/masterCard.svg";
import fluxlogo from "../../assets/fluxlogo3.webp";

const Card = ({ card_style, title }) => {
  const cards = [card1, card2, card3];
  return (
    <Container style={{ backgroundImage: `url(${cards[card_style]})` }}>
      <div className="walletImg-container">
        <img src={fluxlogo} alt={"Flux"} className="flux-logo" />
        <img src={masterCard} alt={"Master Card"} className="masterCard-logo" />
      </div>
      <p className="amount">
        <span>₦ </span>30, 000.00
      </p>
      <div className="wallet-content">
        <p className="card-no">1234 5678 **** ****</p>
        <div className="wallet-last-row">
          <p className="card-name">JACKSON DOE</p>
          <p className="card-date">02/25</p>
        </div>
      </div>
    </Container>
  );
};

export default Card;
