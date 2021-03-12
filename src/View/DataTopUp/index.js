import React from 'react'
import { Button, RadioButton, Modal, InputGroup } from '../../UI'
import Container from './styles'

const DataTopUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Container>
      <Modal
        showModal={true}
        className="modal--size__sm modal--close__relative"
        modalTitle={'Data Topup'}
      >
        <form onSubmit={handleSubmit}>
          <div className="form--inputs">
            <InputGroup>
              <select placeholder={'Network'}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <p className="u--typo__smBody helper--text">
                Check your balance by dialling *127*0#
              </p>
            </InputGroup>
            <InputGroup>
              <select placeholder={'Data Plans'}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <p className="u--typo__smBody helper--text">
                All data plans last 30days unless otherwise indicated.
              </p>
            </InputGroup>
            <p className="u--typo__normal">Who is this for?</p>
            <InputGroup className="radio--btn__container">
              <label className="u--color__dark">
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
              <label className="u--color__dark">
                <RadioButton
                  type="radio"
                  value="Someone else"
                  name={'airtime'}
                />
                Someone else
              </label>
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

export default DataTopUp
