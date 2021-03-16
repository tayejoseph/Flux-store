import React, { useState } from 'react'
import { Button, Modal, InputGroup } from '../../../UI'
import Container from './styles'

const WithDraw = () => {
  const [formData, setFormState] = useState({
    amount: '',
    bankName: '',
    accountNo: '',
  })

  const handleInput = (e) => {
    setFormState({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Container>
      <Modal
        showModal={true}
        className="modal--size__sm modal--close__relative"
        modalTitle={'Withdraw'}
      >
        <form onSubmit={handleSubmit}>
          <div className="form--inputs">
            <p className="intro--txt">
              Enter the amount and account you wish to withdraw
            </p>
            <InputGroup>
              <input
                placeholder={'₦0.00'}
                name="amount"
                onChange={handleInput}
                value={formData.amount}
              />
            </InputGroup>
            <InputGroup>
              <input
                placeholder={'Bank'}
                name="bankName"
                onChange={handleInput}
                value={formData.bankName}
              />
            </InputGroup>
            <InputGroup>
              <input
                placeholder={'Account Number'}
                name="accountNo"
                onChange={handleInput}
                value={formData.accountNo}
              />
            </InputGroup>
            <div className="account--name">
              <p>Balogun Darius Olanrewaju</p>
            </div>
          </div>
          <footer>
            <Button full type="submit" rounded>
              Withdraw
            </Button>
          </footer>
        </form>
      </Modal>
    </Container>
  )
}

export default WithDraw
