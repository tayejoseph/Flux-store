import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, useHistory, useRouteMatch } from "react-router";
import { MdAdd } from "react-icons/md";
import cardImg from "../../assets/card.webp";
import cardIllust from "../../assets/cardIllust.svg";
import { Button } from "../../UI";
import DashboardHeader from "../../Layout/DashboardHeader";
import Container from "./styles";
import CardIntro from "./CardIntro";
import CardForm from "./CardForm";
import CardView from "./CardView";
import { createVirtualCard, fetchVirtualCards } from "../../store/actions/user";

const VirtualCard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { path } = useRouteMatch();
  const [loading, setLoading] = useState(false);
  const [formData, setState] = useState({
    currency: "NGN",
    amount: "",
    card_style: 0,
  });
  const handleInput = ({ target }) => {
    setState((s) => ({
      ...s,
      [target.name]: target.value,
    }));
  };

  const handleCreateCard = () => {
    setLoading(true);
    dispatch(createVirtualCard(formData)).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    dispatch(fetchVirtualCards());
  }, [dispatch]);

  return (
    <Container>
      <DashboardHeader
        middleContent={
          <div>
            <div className="card">
              <img src={cardImg} alt="card" className="cardImg" />
              <img
                src={cardIllust}
                alt="cardIllustration"
                className="illustration"
              />
              <div className="card-content">
                <h2 className="title">
                  Flux Cards<span>.</span>
                </h2>
                <p className="u-typo_lgBody">
                  Set up your own Naira or Dollar <br />
                  cards.
                </p>
                <Button onClick={() => history.push(`${path}/cardIntro`)}>
                  <span>
                    <MdAdd />
                  </span>
                  Create Card
                </Button>
              </div>
            </div>
          </div>
        }
      />
      <Route path={`${path}/cardIntro`}>
        <CardIntro {...{ handleInput, formData, setState }} />
      </Route>
      <Route path={`${path}/cardForm`}>
        <CardForm {...{ handleInput, formData }} />
      </Route>
      <Route path={`${path}/cardView`}>
        <CardView {...{ handleInput, loading, formData, handleCreateCard }} />
      </Route>
    </Container>
  );
};

export default VirtualCard;
