import React, { useState, useMemo } from 'react'
import { Button, Modal, InputGroup, Spinner } from '../../UI'
import { sendMoney, validateFluxId } from '../../store/actions/user'
import { formValidator } from '../../helpers'
import Container from './styles'

const initState = {
  loading: false,
  error: false,
  validated: false,
}
const SendMoney = () => {
  const [{ loading, validated, error }, setDisplay] = useState(initState)
  const [formData, setState] = useState({
    amount: 0,
    receiver: '',
    receiveName: '',
    description: '',
  })
  const disabled = useMemo(
    () => !formData.amount || !formData.receiver || loading,
    [formData, loading],
  )

  const handleValidateTag = async () => {
    if (formData.receiver) {
      setDisplay((s) => ({ ...s, validated: 'validating' }))

      try {
        const response = await validateFluxId(formData.receiver)
        // if (status === 200) {
        //   setDisplay((s) => ({ ...s, validated: true }))
        // }
        console.log(response, 'sdjksjskj')
      } finally {
        // setDisplay((s) => ({ ...s, loading: false }))
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      formValidator(document.forms['auth--form'].getElementsByTagName('input'))
    ) {
      try {
        setDisplay((s) => ({ ...s, loading: true }))
        const { receiveName, ...rest } = formData
        const response = await sendMoney(rest)
        console.log(response, 'dksdslk')
      } finally {
        setDisplay((s) => ({ ...s, loading: false }))
      }
    }
  }
  const handleInput = ({ target }) => {
    if (target.name === 'receiver') {
      setDisplay(initState)
    }
    setState((s) => ({
      [target.name]: target.value,
    }))
  }

  return (
    <Container>
      <Modal
        showModal={true}
        className="modal--size__sm modal--close__relative"
        modalTitle={'Send Money'}
      >
        <form onSubmit={handleSubmit}>
          <div className="form--inputs">
            <InputGroup
              placeholder={'Amount to send'}
              type="number"
              name="amount"
              onChange={handleInput}
            />
            <InputGroup
              placeholder={'Flux ID or Flux tag (e.g @snapdragon)'}
              name="receiver"
              onChange={handleInput}
              onBlur={handleValidateTag}
            />
            {validated && (
              <div className="flux--name">
                {validated === 'validating' ? (
                  <Spinner />
                ) : (
                  <p className={error ? 'u--status__error' : ''}>
                    {formData.acct_name}
                  </p>
                )}
              </div>
            )}
            <InputGroup
              placeholder={'Description'}
              name="description"
              onChange={handleInput}
            />
          </div>
          <footer>
            <Button
              full
              type="submit"
              rounded
              loading={loading}
              disabled={disabled}
            >
              Send
            </Button>
          </footer>
        </form>
      </Modal>
    </Container>
  )
}

export default SendMoney
