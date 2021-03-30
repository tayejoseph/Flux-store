import React from 'react'
import { InputGroup } from '../../UI'

const AccForm = ({ formData, handleInput }) => {
  return (
    <div>
      <InputGroup>
        <label>Select your user type</label>
        <select
          placeholder={'User Type'}
          name="account_type"
          value={formData.account_type}
          onChange={handleInput}
        >
          <option value="business">Business</option>
          <option value="normal">Normal User</option>
        </select>
      </InputGroup>
      {formData.account_type === 'business' && (
        <InputGroup
          label={'Bussiness Name'}
          placeholder={'Enter your store name'}
          name="name"
          value={formData.name}
          onChange={handleInput}
          required={true}
        />
      )}
    </div>
  )
}

export default AccForm
