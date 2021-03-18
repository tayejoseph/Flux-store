import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, RadioButton, Modal, InputGroup } from '../../UI'
import { fetchDataPlan, handleAirTimeTopUp } from '../../store/actions/App'
import Container from './styles'

const AirTimeTopUp = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const { dataPlans } = useSelector((s) => s.app)
  const [formData, setFormState] = useState({
    amount: '',
    whoFor: 'self',
    receiptNo: '',
  })
  const handleInput = ({ target }) => {
    setFormState({
      ...formData,
      [target.name]: target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { phoneNo, amount, whoFor } = formData
      const { status, data: response } = await handleAirTimeTopUp({
        whoFor: whoFor === 'self' ? whoFor : phoneNo,
        amount,
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDataPlan(dispatch)
  }, [dispatch])
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
                  name={'whoFor'}
                  checked={formData.whoFor === 'self' && true}
                  onChange={({ target }) =>
                    setFormState({
                      ...formData,
                      whoFor: target.checked ? 'self' : 'someoneElse',
                    })
                  }
                />
                My Self
              </label>
            </InputGroup>
            <InputGroup className="radio--btn__container">
              <label className="u--color__dark">
                <RadioButton
                  type="radio"
                  name={'whoFor'}
                  checked={formData.whoFor === 'someoneElse' && true}
                  onChange={({ target }) =>
                    setFormState({
                      ...formData,
                      whoFor: target.checked ? 'someoneElse' : 'self',
                    })
                  }
                />
                Someone else
              </label>
            </InputGroup>
            <InputGroup>
              <select
                placeholder={'Network'}
                name="networkIndex"
                onChange={handleInput}
              >
                <option value="volvo" disabled={true}>
                  Select Recipient's Network
                </option>
                {dataPlans &&
                  dataPlans.map((item, index) => (
                    <option value={index} key={item.newort_code}>
                      {item.network_name}
                    </option>
                  ))}
              </select>
            </InputGroup>
            {formData.whoFor !== 'self' && (
              <InputGroup
                placeholder={"Recipient's Number"}
                type="tel"
                name={'receiptNo'}
                onChange={handleInput}
              />
            )}
          </div>
          <footer>
            <Button full type="submit" rounded loading={loading}>
              Top up
            </Button>
          </footer>
        </form>
      </Modal>
    </Container>
  )
}

export default AirTimeTopUp
