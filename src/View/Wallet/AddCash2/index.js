import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalContent from './ModalContent'
import DashboardHeader from '../../../Layout/DashboardHeader'
import { fetchCards } from '../../../store/actions/User'
import { Button, InputGroup, RadioButton, Modal } from '../../../UI'
import Container from './styles'

const AddCash = () => {
  const dispatch = useDispatch()
  const { cardLists } = useSelector((state) => state.user)
  const [displaySection, setDisplay] = useState(false)
  const [formData, setFormState] = useState({
    amount: '',
    cardNo: '',
    paymentMethod: 'card',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    dispatch(fetchCards())
  }, [dispatch])

  return (
    <Container>
      <Modal
        className="modal--size__sm modal--close__relative"
        modalTitle={
          formData.paymentMethod === 'card' ? 'Select Card' : 'Payment Account'
        }
        showModal={displaySection}
        onClose={() => setDisplay(false)}
      >
        <ModalContent
          {...{ displaySection, cardLists }}
          modalTitle={'Withdraw'}
        />
      </Modal>
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
                    paymentMethod: e.target.checked ? 'card' : 'transfer',
                  })
                }}
                checked={formData.paymentMethod === 'card'}
              />
              Card
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
                    paymentMethod: e.target.checked ? 'transfer' : 'card',
                  })
                }}
                checked={formData.paymentMethod === 'transfer'}
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
        <Button rounded onClick={() => setDisplay(formData.paymentMethod)}>
          Proceed
        </Button>
      </form>
    </Container>
  )
}

export default AddCash
