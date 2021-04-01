import React from 'react'
import { useHistory } from 'react-router'
import card1 from '../../../assets/card1.png'
import card2 from '../../../assets/card2.png'
import card3 from '../../../assets/card3.png'
import { RadioButton, Button, Modal, InputGroup } from '../../../UI'
import Container from './styles'

const CardForm = ({ showModal, hideModal }) => {
  const history = useHistory()
  return (
    <Container>
      <Modal
        className="modal--size__sm modal--close__relative"
        modalTitle={'Create a New Card'}
        showModal={true}
        onClose={hideModal}
      >
        <div className="content--container">
          <section>
            <p className="u--typo__lgBody u--color__light">
              How much would you like to fund your card with?
            </p>
            <InputGroup
              name="amount"
              placeholder="Enter Amount"
              value=""
              required={true}
              autoFocus={true}
            />
          </section>

          <section>
            <div class="section--item">
              <p className="u--typo__normal">Card Creation Fee</p>
              <p className="u--typo__normal">- ₦250.00</p>
            </div>
            <hr />
            <div class="section--item">
              <p className="u--typo__normal">Total Creditable</p>
              <p className="u--typo__normalBold">₦17,750.00</p>
            </div>
          </section>
          <section>
            <Button full>Next</Button>
          </section>
        </div>
      </Modal>
    </Container>
  )
}

export default CardForm
