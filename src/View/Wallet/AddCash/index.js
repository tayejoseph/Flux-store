import React, { useState } from 'react'
import DashboardHeader from '../../../Layout/DashboardHeader'
import { Button, InputGroup, RadioButton } from '../../../UI'
import Container from './styles'

const AddCash = () => {
  const [formData, setFormState] = useState({
    amount: '',
    paymentMethod: 'Debit Card',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container>
      <header>
        <DashboardHeader navType="small" />
        <div className="cash--header__container">
          <h1 className="u--typo__headline">Add Cash</h1>
          <p className="u--typo__normal u--color__lighter">
            Flux Wallet > <span className="u--color__dark">Add Cash</span>
          </p>
        </div>
      </header>
      <hr />
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <label>Enter amount to add?</label>
          <input
            type="text"
            placeholder="₦0.00"
            value={formData.amount}
            onChange={({ target }) =>
              setFormState((s) => ({ ...s, amount: target.value }))
            }
          />
        </InputGroup>
        <hr />
        <div className="payment--method__container">
          <p>Select Payment method</p>
          <InputGroup className="radio--btn__container">
            <label className="u--color__dark ">
              <RadioButton
                type="radio"
                onChange={(e) => {
                  setFormState({
                    ...formData,
                    paymentMethod: e.target.checked
                      ? 'Debit Card'
                      : 'Bank Transfer',
                  })
                }}
                checked={formData.paymentMethod === 'Debit Card'}
              />
              Debit Card
            </label>
          </InputGroup>
          <InputGroup className="radio--btn__container">
            <label className="u--color__dark ">
              <RadioButton
                type="radio"
                name={'paymentMethod'}
                onChange={(e) => {
                  setFormState({
                    ...formData,
                    paymentMethod: e.target.checked
                      ? 'Bank Transfer'
                      : 'Debit Card',
                  })
                }}
                checked={formData.paymentMethod === 'Bank Transfer'}
              />
              Bank Transfer
            </label>
          </InputGroup>
        </div>
        <hr />

        <div className="account--summary">
          <div className="flux--row">
            <p>Amount</p>
            <p>₦0.00</p>
          </div>
          <div className="flux--row">
            <p>Processing Fee</p>
            <p>₦35.00</p>
          </div>
        </div>
        <hr />

        <div className="total--container flux-row">
          <div className="flux--row">
            <p>Total</p>
            <p>₦0.00</p>
          </div>
        </div>
        <Button type="submit" rounded>
          Proceed
        </Button>
      </form>
    </Container>
  )
}

export default AddCash
