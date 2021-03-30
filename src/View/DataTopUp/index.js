import React, { useState } from 'react'
import { Button, RadioButton, Modal, InputGroup } from '../../UI'
import { handleDataTopUp } from '../../store/actions/App'
import { dataPlans } from '../../Constants'
import Container from './styles'

const DataTopUp = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormState] = useState({
    whoFor: 'self',
    networkIndex: 0,
    activePlanIndex: 0,
    phoneNo: '',
  })

  const handleInput = ({ target }) => {
    setFormState((s) => ({
      ...s,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { networkIndex, amount, whoFor, planIndex } = formData
      await handleDataTopUp({
        plan_code: dataPlans[networkIndex].plans[planIndex].plan_code,
        receiver: whoFor,
        network: dataPlans[networkIndex].network_name,
        amount: amount,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Modal
        showModal={true}
        className="modal--size__sm modal--close__relative"
        modalTitle={'Data Topup'}
      >
        {dataPlans && (
          <form onSubmit={handleSubmit}>
            <div className="form--inputs">
              <InputGroup>
                <select
                  placeholder={'Network'}
                  name="networkIndex"
                  onChange={handleInput}
                >
                  <option disabled>Select Your Network</option>
                  {dataPlans.map((item, index) => (
                    <option value={index} key={item.newort_code}>
                      {item.network_name.toUpperCase()}
                    </option>
                  ))}
                </select>
                <p className="u--typo__smBody helper--text">
                  {formData.networkIndex !== '' &&
                    dataPlans[formData.networkIndex].check_balance}
                </p>
              </InputGroup>
              <InputGroup>
                <select
                  placeholder={'Data Plans'}
                  name="activePlanIndex"
                  onChange={handleInput}
                >
                  {formData.networkIndex !== '' &&
                    dataPlans[formData.networkIndex].plans.map(
                      (item, index) => (
                        <option value={index} key={item.plan_code}>
                          {item.name}
                        </option>
                      ),
                    )}
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
                    value="self"
                    name={'whoFor'}
                    onChange={handleInput}
                    checked={formData.whoFor === 'self'}
                  />
                  Myself
                </label>
              </InputGroup>
              <InputGroup className="radio--btn__container">
                <label className="u--color__dark">
                  <RadioButton
                    type="radio"
                    value="someoneElse"
                    name={'whoFor'}
                    onChange={handleInput}
                    checked={formData.whoFor === 'someoneElse'}
                  />
                  Someone else
                </label>
              </InputGroup>
              {formData.whoFor !== 'self' && (
                <InputGroup
                  type="tel"
                  name={'phoneNumber'}
                  value={formData.phoneNumber}
                  onChange={handleInput}
                  placeholder={"Recipient's Number"}
                />
              )}
            </div>
            <footer>
              <Button full type="submit" rounded loading={loading}>
                Top up
              </Button>
            </footer>
          </form>
        )}
      </Modal>
    </Container>
  )
}

export default DataTopUp
