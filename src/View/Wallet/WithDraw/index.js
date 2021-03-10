import React from 'react'
import { Button, RadioButton, Modal, InputGroup } from '../../../UI'
import Container from './styles'

const DataTopUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Container>
      <Modal
        showModal={true}
        className="modal--size__md modal--close__relative"
        modalTitle={'Withdraw'}
      >
        <form onSubmit={handleSubmit}>
          <div className="form--inputs">
            <p className="intro--txt">
              Enter the amount and account you wish to withdraw
            </p>
            <InputGroup>
              <input placeholder={'₦0.00'} />
            </InputGroup>
            <InputGroup>
              <input placeholder={'Bank'} />
            </InputGroup>
            <InputGroup>
              <input placeholder={'Account Number'} />
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

export default DataTopUp
