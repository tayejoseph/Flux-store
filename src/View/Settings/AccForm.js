import React from 'react'
import { InputGroup } from '../../UI'

const AccForm = ({ userData, handleInput }) => {
  return (
    <div>
      <InputGroup
        label={'Full Name'}
        placeholder={'e.g Jackson Doe'}
        name="full_name"
        defaultValue={userData.full_name}
        onChange={handleInput}
        required
      />
      <InputGroup
        label={'Phone Number'}
        placeholder={'08453453407'}
        name={'phone'}
        type={'tel'}
        defaultValue={userData.phone}
        onChange={handleInput}
        required
      />
      <InputGroup
        label="Date of Birth"
        placeholder={'YYYY-MM-DD'}
        name="dob"
        type="date"
        defaultValue={userData.dob}
        onChange={handleInput}
        required
      />
      <InputGroup
        label="Bank Verification Number(BVN)"
        placeholder={'457779894'}
        name="bvn"
        defaultValue={userData.bvn}
        onChange={handleInput}
        required
      />
    </div>
  )
}

export default AccForm
