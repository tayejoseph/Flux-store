import React from 'react'
import { InputGroup } from '../../UI'

const AccForm = ({ formData, handleInput }) => {
  return (
    <div>
      <InputGroup
        label={'Full Name'}
        placeholder={'e.g Jackson Doe'}
        name="Full Name"
        value={formData.title}
        onChange={handleInput}
      />
      <InputGroup
        label={'Phone Number'}
        placeholder={'08453453407'}
        name={'phoneNo'}
        type={'tel'}
        value={formData.phoneNo}
        onChange={handleInput}
      />
      <InputGroup
        label="Date of Birth"
        placeholder={'YYYY-MM-DD'}
        name="dateOfBirth"
        type="date"
        value={formData.dateOfBirth}
        onChange={handleInput}
      />
      <InputGroup
        label="Bank Verification Number(BVN)"
        placeholder={'457779894'}
        name="delivery"
        value={formData.delivery}
        onChange={handleInput}
      />
    </div>
  )
}

export default AccForm
