import React from "react";
import { ProductCategories } from "../../../constants";
import { InputGroup } from "../../../UI";

const InfoForm = ({ formData, handleFormInput }) => {
  return (
    <div>
      <InputGroup
        label="Enter Product Title"
        placeholder={"e.g PS4 Slim 500GB"}
        name="name"
        value={formData.name}
        onChange={handleFormInput}
      />
      <InputGroup
        label="Enter Product Description"
        placeholder={"Short Description"}
        name="description"
        value={formData.description}
        onChange={handleFormInput}
      />
      <InputGroup
        label="Enter Product Price"
        placeholder={"₦0.00"}
        name="amount"
        type="number"
        value={formData.amount}
        onChange={handleFormInput}
      />
      <InputGroup>
        <label>Product Categories</label>
        <select
          placeholder={"Product Categorie"}
          name="category"
          onChange={handleFormInput}
        >
          {ProductCategories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </InputGroup>
      <InputGroup
        label="Available Quantity"
        placeholder={"200"}
        name="quantity"
        type="number"
        value={formData.quantity}
        onChange={handleFormInput}
      />
      <InputGroup
        label="Delivery"
        placeholder={"e.g PHC, LAG and ABJ"}
        name="delivery"
        value={formData.delivery}
        onChange={handleFormInput}
      />
    </div>
  );
};

export default InfoForm;
