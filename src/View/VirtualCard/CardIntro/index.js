import React from 'react'
import { useHistory } from 'react-router'
import card1 from '../../../assets/card1.webp'
import card2 from '../../../assets/card2.webp'
import card3 from '../../../assets/card3.webp'
import { BiCheck } from 'react-icons/bi'
import { RadioButton, Button, Modal } from '../../../UI'
import Container from './styles'

const CardIntro = ({ formData, handleInput, setState }) => {
  const history = useHistory()

  const selectActiveCard = (index) => {
    setState((s) => ({ ...s, card_style: index }))
  }

  return (
    <Container>
      <Modal
        className="modal--size__sm modal--close__relative"
        modalTitle={'Create a New Card'}
        showModal={true}
      >
        <div className="content--container">
          <div className="card--type__container">
            <p className="u--typo__lgBody u--color__light">
              Select Card Currency
            </p>
            <label className="card--option__item">
              <div className="col--1">
                <span>₦</span>
              </div>
              <div className="col--2">
                <h3 className="u--typo__title">Naira Card</h3>
                <p className="u--typo__smBody u--color__light">
                  You will be charged ₦250 to create a Naira card.
                </p>
              </div>
              <div className="col--3">
                <RadioButton
                  name="currency"
                  value="NGN"
                  checked={formData.currency === 'NGN'}
                />
              </div>
            </label>
            <label className="card--option__item">
              <div className="col--1">
                <span>$</span>
              </div>
              <div className="col--2">
                <h3 className="u--typo__title">Dollar Card</h3>
                <p className="u--typo__smBody u--color__light">
                  You will be charged $1.50(₦750) to create a Dollar card.{' '}
                </p>
              </div>
              <div className="col--3">
                <RadioButton
                  name="currency"
                  value="dollar"
                  checked={formData.currency === 'dollar'}
                />
              </div>
            </label>
          </div>
          <hr />
          <footer>
            <p className="u--typo__lgBody u--color__light">Select Card Style</p>
            <div className="imgs--container">
              <div
                className={`card--container ${
                  formData.card_style === 0 ? 'active' : ''
                }`}
                onClick={() => selectActiveCard(0)}
              >
                <img src={card1} alt="card" />
                <BiCheck />
              </div>
              <div
                className={`card--container ${
                  formData.card_style === 1 ? 'active' : ''
                }`}
                onClick={() => selectActiveCard(1)}
              >
                <img src={card2} alt="card" />
                <BiCheck />
              </div>
              <div
                className={`card--container ${
                  formData.card_style === 2 ? 'active' : ''
                }`}
                onClick={() => selectActiveCard(2)}
              >
                <img src={card3} alt="card" />
                <BiCheck />
              </div>
            </div>
          </footer>
          <hr />
          <div className="btn--container">
            <Button
              full
              rounded
              className="next--btn"
              onClick={() => history.push('/dashboard/virtualCard/cardForm')}
            >
              Next
            </Button>
          </div>
        </div>
      </Modal>
    </Container>
  )
}

export default CardIntro
