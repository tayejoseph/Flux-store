import React from 'react'
import { InputGroup } from '../../UI'

const PasswordForm = ({ formData, handleInput }) => {
  return (
    <div>
      <InputGroup
        label={'Old Password'}
        placeholder={'**********'}
        name="oldPassword"
        type={'password'}
        value={formData.oldPassword}
        onChange={handleInput}
      />
      <InputGroup
        label={'New Password'}
        placeholder={'**********'}
        name="newPassword"
        type={'password'}
        value={formData.newPassword}
        onChange={handleInput}
      />
      <InputGroup
        label={'Confirm New Password'}
        placeholder={'**********'}
        name="confirmPassword"
        type={'password'}
        value={formData.confirmPassword}
        onChange={handleInput}
      />
    </div>
  )
}

export default PasswordForm
