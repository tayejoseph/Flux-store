import React from 'react'
import { InputGroup } from '../../../UI'

const InfoForm = ({ formData, handleInput }) => {
  return (
    <div>
      <InputGroup>
        <label>Enter Product Title</label>
        <input
          placeholder={'e.g PS4 Slim 500GB'}
          name="title"
          value={formData.title}
          onChange={handleInput}
        />
      </InputGroup>
      <InputGroup>
        <label>Enter Product Description</label>
        <input
          placeholder={'Short Description'}
          name="description"
          value={formData.description}
          onChange={handleInput}
        />
      </InputGroup>
      <InputGroup>
        <label>Enter Product Price</label>
        <input
          placeholder={'₦0.00'}
          name="price"
          type="number"
          value={formData.price}
          onChange={handleInput}
        />
      </InputGroup>
      <InputGroup>
        <label>Available Quantity</label>
        <input
          placeholder={'200'}
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleInput}
        />
      </InputGroup>
      <InputGroup>
        <label>Delivery</label>
        <input
          placeholder={'e.g PHC, LAG and ABJ'}
          name="delivery"
          value={formData.delivery}
          onChange={handleInput}
        />
      </InputGroup>
    </div>
  )
}

export default InfoForm
