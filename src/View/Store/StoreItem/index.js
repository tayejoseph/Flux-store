import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdMoreVert } from "react-icons/md";
import { toMoney } from "../../../helpers";
import { Button } from "../../../UI";
import Container from "./styles";

const StoreItem = ({
  name,
  amount,
  image_url_1,
  onClick,
  showActionSheet,
  index,
  onActionClick,
}) => {
  return (
    <Container role={"button"} onClick={onClick}>
      <Button icon className="shop-item_btn" onClick={onActionClick}>
        <MdMoreVert />
      </Button>
      <div className="img-container">
        <LazyLoadImage src={image_url_1} alt={name} effect="blur" />
      </div>
      <div className="text-content">
        <p className="productName">{name}</p>
        <p className="price">₦{toMoney(amount)}</p>
      </div>
      {showActionSheet === index && (
        <div className="storeItem-action_container">
          <ol className="u-typo_btn">
            <li>Copy Link</li>
            <li>Edit</li>
            <li>Unpublish</li>
            <li className="status-txt_failed2">Delete Permanently</li>
          </ol>
        </div>
      )}
    </Container>
  );
};

export default StoreItem;
