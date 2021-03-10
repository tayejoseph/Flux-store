import React from 'react'
import { Button, RadioButton, Modal, InputGroup } from '../../UI'
import Container from './styles'

const AirTimeTopUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Container>
      <Modal
        showModal={true}
        className="modal--size__md modal--close__relative"
        modalTitle={'Airtime Topup'}
      >
        <form onSubmit={handleSubmit}>
          <div className="form--inputs">
            <InputGroup>
              <input placeholder={'Amount of Airtime'} />
            </InputGroup>
            <p className="who">Who is this for?</p>
            <InputGroup className="radio--btn__container">
              <label>
                <RadioButton
                  type="radio"
                  value="Myself"
                  name={'airtime'}
                  checked={true}
                />
                Myself
              </label>
            </InputGroup>
            <InputGroup className="radio--btn__container">
              <label>
                <RadioButton
                  type="radio"
                  value="Someone else"
                  name={'airtime'}
                />
                Someone else
              </label>
            </InputGroup>
            <InputGroup>
              <select placeholder={"Recipient's Number"}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </InputGroup>
            <InputGroup>
              <input placeholder={"Recipient's Number"} />
            </InputGroup>
          </div>
          <footer>
            <Button full type="submit" rounded>
              Top up
            </Button>
          </footer>
        </form>
      </Modal>
    </Container>
  )
}

export default AirTimeTopUp
