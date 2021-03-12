import React from 'react'
import { InputGroup } from '../../../UI'

const InfoForm = () => {
  return (
    <div>
      <InputGroup>
        <label>Enter Product Title</label>
        <input placeholder={'e.g PS4 Slim 500GB'} />
      </InputGroup>
      <InputGroup>
        <label>Enter Product Description</label>
        <input placeholder={'Short Description'} />
      </InputGroup>
      <InputGroup>
        <label>Enter Product Price</label>
        <input placeholder={'₦0.00'} />
      </InputGroup>
      <InputGroup>
        <label>Available Quantity</label>
        <input type="number" placeholder={'200'} />
      </InputGroup>
      <InputGroup>
        <label>Delivery</label>
        <input placeholder={'e.g PHC, LAG and ABJ'} />
      </InputGroup>
    </div>
  )
}

export default InfoForm
