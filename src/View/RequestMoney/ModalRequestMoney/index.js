import React, { useState, useMemo } from 'react'
import { sendRequest, getUserByFluxId } from '../../../store/actions/User'
import { formValidator } from '../../../helpers'
import { Button, Modal, InputGroup } from '../../../UI'
import Container from './styles'

const ModalRequestMoney = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormState] = useState({
    amount: '',
    description: '',
    receiver: '',
  })

  const disabled = useMemo(
    () => !formData.description || !formData.amount || loading,
    [formData, loading],
  )
  const handleInput = ({ target }) => {
    setFormState((s) => ({
      ...s,
      [target.name]: target.value,
    }))
  }

  const getUserDetails = async ({ target }) => {
    try {
      const { status, data: response } = await getUserByFluxId(target.value)
      console.log({ status, response }, 'sdjsdsdkj')
    } catch (data) {}
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      formValidator(
        document.forms['request--form'].getElementsByTagName('input'),
      )
    ) {
      try {
        setLoading(true)
        const { state, data: response } = await sendRequest(formData)
        console.log({ state, response }, 'sdjsdjsdksj')
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <Container>
      <Modal
        showModal={true}
        className="modal--size__sm modal--close__relative"
        modalTitle={'Send a Request'}
      >
        <form onSubmit={handleSubmit} name="request--form" noValidate>
          <div className="form--inputs">
            <p className="instruction--txt">
              Enter amount, recipient and description.
            </p>
            <InputGroup
              placeholder={'Amount'}
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInput}
              required
            />
            <InputGroup
              name="receiver"
              placeholder={'Flux ID'}
              value={formData.receiver}
              onChange={handleInput}
              required
              onBlur={getUserDetails}
            />
            <div className="recipiantName--container">
              <p className="u--typo__normal">Recipient Name</p>
            </div>
            <InputGroup
              name="description"
              value={formData.description}
              placeholder={'Description'}
              onChange={handleInput}
              required
            />
          </div>
          <footer>
            <Button
              loading={loading}
              disabled={disabled}
              full
              type="submit"
              rounded
            >
              Send Request
            </Button>
          </footer>
        </form>
      </Modal>
    </Container>
  )
}

export default ModalRequestMoney
