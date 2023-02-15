import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaStore, FaBell, FaMoneyBillWave } from "react-icons/fa";
import caousel1 from "../../../assets/Group 503.svg";
import caousel2 from "../../../assets/Group 504.svg";
import caousel3 from "../../../assets/Group 505.svg";
import { Modal, Button } from "../../../UI";
import Container from "./styles";

const carouselContent = [
  {
    title: "Build your store",
    icon: <FaStore />,
    imgSrc: caousel1,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
  },
  {
    title: "Share Payment Links",
    icon: <FaMoneyBillWave />,
    imgSrc: caousel2,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
  },
  {
    title: "Push Notifications",
    imgSrc: caousel3,
    icon: (
      <div className="notification-bell">
        <FaBell />
      </div>
    ),
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
  },
];

const CarouselItem = ({ title, description, icon, imgSrc }) => (
  <div className="carousel-item">
    <div>
      {icon}
      <div className="img-container">
        <img src={imgSrc} alt={title} />
      </div>
    </div>
    <div>
      <h2 className="u-typo_title">{title}</h2>
      <p className="u-color_light u-typo_normal">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna.
      </p>
    </div>
  </div>
);

const NewUser = () => {
  const [activeIndex, setState] = useState(0);
  const history = useHistory();

  const handleCarouselChange = (action) => {
    setState(action === "prev" ? activeIndex - 1 : activeIndex + 1);
  };

  useEffect(() => {
    const handleKeyNav = (e) => {
      if (e.code === "ArrowRight") document.getElementById("next-btn").click();
      else if (e.code === "ArrowLeft")
        document.getElementById("prev-btn").click();
    };
    document.addEventListener("keyup", handleKeyNav);
    return () => {
      document.removeEventListener("keyup", handleKeyNav);
    };
  }, []);

  return (
    <Container>
      <Modal
        showModal={true}
        showCloseBtn={false}
        className="modal-close_relative"
      >
        <div className="newuser-container">
          <div className="carousel">
            <CarouselItem {...carouselContent[activeIndex]} />
            <div className="coursel-action">
              <Button
                icon
                disabled={activeIndex === 0}
                id="prev-btn"
                onClick={() => handleCarouselChange("prev")}
              >
                <MdKeyboardArrowLeft />
              </Button>
              <div className="active-indicator">
                {[...Array(carouselContent.length).keys()].map((i) => (
                  <span key={i} className={i === activeIndex ? "active" : ""} />
                ))}
              </div>
              <Button
                icon
                disabled={activeIndex === carouselContent.length - 1}
                onClick={() => handleCarouselChange("next")}
                id="next-btn"
              >
                <MdKeyboardArrowRight />
              </Button>
            </div>
          </div>
          <footer>
            <Button
              tertiary
              onClick={() => history.replace("/dashboard/store")}
            >
              Skip
            </Button>
          </footer>
        </div>
      </Modal>
    </Container>
  );
};

export default NewUser;
