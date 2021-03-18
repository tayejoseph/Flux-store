import React from 'react'
import { Button, Modal, InputGroup } from '../../../UI'
import Container from './styles'

const ModalRequestMoney = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container>
      <Modal
        showModal={true}
        className="modal--size__sm modal--close__relative"
        modalTitle={'Send a Request'}
      >
        <form onSubmit={handleSubmit}>
          <div className="form--inputs">
            <p className="instruction--txt">
              Enter amount, recipient and description.
            </p>
            <InputGroup>
              <input placeholder={'Amount'} type="number" />
            </InputGroup>
            <InputGroup>
              <input placeholder={'Flux ID'} />
            </InputGroup>
            <div className="recipiantName--container">
              <p className="u--typo__normal">Recipient Name</p>
            </div>
            <InputGroup>
              <input placeholder={'Description'} />
            </InputGroup>
          </div>
          <footer>
            <Button full type="submit" rounded>
              Send Request
            </Button>
          </footer>
        </form>
      </Modal>
    </Container>
  )
}

export default ModalRequestMoney
