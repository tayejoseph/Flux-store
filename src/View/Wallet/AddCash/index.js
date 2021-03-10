import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { IoMdSettings, IoMdArrowRoundBack } from 'react-icons/io'
import { IoArrowBackOutline, IoArrowBack } from 'react-icons/io5'
import { FaBell } from 'react-icons/fa'
import { Button, InputGroup, RadioButton } from '../../../UI'
import Container from './styles'

const AddCash = () => {
  const history = useHistory()
  const [formData, setFormState] = useState({amount: "", paymentMethod: "Debit Card"})
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container>
      <header>
        <nav>
          <Button className = "back--btn" icon iconRight onClick={() => history.goBack()}>
            <IoMdArrowRoundBack />
            Go Back
          </Button>
          <div className="btn--tray">
            <Button icon>
              <IoMdSettings />
            </Button>
            <Button icon>
              <FaBell />
            </Button>
          </div>
        </nav>
        <div>
          <h1 className="u--typo__headline">Add Cash</h1>
          <p>
            Flux Wallet > <span className = "u-dark">Add Cash</span>
          </p>
        </div>
      </header>
      <hr />
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <label>Enter amount to add?</label>
          <input type="text" placeholder="₦0.00" value = {formData.amount} onChange = {({target}) => setFormState((s) => ({...s, amount: target.value}))} />
        </InputGroup>
        <hr />
        <div className="payment--method__container">
        <p>Select Payment method</p>
          <InputGroup className="radio--btn__container">
            <label>
              <RadioButton
                type="radio"
                value="Debit Card"
                name={'paymentMethod'}
                checked={formData.paymentMethod === "Debit Card"}
              />
              Debit Card
            </label>
          </InputGroup>
          <InputGroup className="radio--btn__container">
            <label>
              <RadioButton
                type="radio"
                value="Bank Transfer"
                name={'paymentMethod'}
                checked={formData.paymentMethod === "Bank Transfer"}
              />
              Bank Transfer
            </label>
          </InputGroup>
        </div>
        <hr />

        <div className="account--summary">
          <div className = "flux--row">
            <p>Amount</p>
            <p>₦0.00</p>
          </div>
          <div className = "flux--row">
            <p>Processing Fee</p>
            <p>₦35.00</p>
          </div>
        </div>
        <hr />

        <div className="total--container flux-row">
          <div className = "flux--row">
            <p>Total</p>
            <p>₦0.00</p>
          </div>
        </div>
        <Button type="submit" rounded>Proceed</Button>
      </form>
    </Container>
  )
}

export default AddCash
