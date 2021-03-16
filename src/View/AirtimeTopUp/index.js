import React, { useState } from 'react'
import { Button, RadioButton, Modal, InputGroup } from '../../UI'
import Container from './styles'

const AirTimeTopUp = () => {
  const [formData, setFormState] = useState({
    amount: '',
    whoFor: 'mySelf',
    receiptNo: '',
    airTimeType: '',
  })
  const handleInput = ({ target }) => {
    setFormState({
      ...formData,
      [target.name]: target.value,
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
        modalTitle={'Airtime Topup'}
      >
        <form onSubmit={handleSubmit}>
          <div className="form--inputs">
            <InputGroup>
              <input
                placeholder={'Amount of Airtime'}
                name="amount"
                onChange={handleInput}
              />
            </InputGroup>
            <p className="u--typo__normal u--color__light">Who is this for?</p>
            <InputGroup className="radio--btn__container">
              <label className="u--color__dark">
                <RadioButton
                  type="radio"
                  name={'airtime'}
                  checked={formData.whoFor === 'mySelf' && true}
                  onChange={({ target }) =>
                    setFormState({
                      ...formData,
                      whoFor: target.checked ? 'mySelf' : 'someoneElse',
                    })
                  }
                />
                Myself
              </label>
            </InputGroup>
            <InputGroup className="radio--btn__container">
              <label className="u--color__dark">
                <RadioButton
                  type="radio"
                  name={'airtime'}
                  checked={formData.whoFor === 'someoneElse' && true}
                  onChange={({ target }) =>
                    setFormState({
                      ...formData,
                      whoFor: target.checked ? 'someoneElse' : 'mySelf',
                    })
                  }
                />
                Someone else
              </label>
            </InputGroup>
            <InputGroup>
              <select
                placeholder={"Recipient's Number"}
                name="airtimeType"
                onChange={handleInput}
              >
                <option value="volvo" disabled={true}>
                  Select Recipient's Network
                </option>
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
