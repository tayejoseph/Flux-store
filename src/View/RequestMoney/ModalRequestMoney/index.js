import React, { useState, useMemo } from 'react'
import { sendRequest, validateFluxId } from '../../../store/actions/user'
import { formValidator } from '../../../helpers'
import { notify } from 'react-notify-toast'
import { useHistory } from 'react-router-dom'
import { Button, Modal, InputGroup, Spinner } from '../../../UI'
import Container from './styles'

const initState = {
  loading: false,
  error: false,
  validated: false,
}
const ModalRequestMoney = () => {
  const history = useHistory()
  const [{ loading, validated, error }, setDisplay] = useState(initState)
  const [formData, setFormState] = useState({
    amount: '',
    description: '',
    receiver: '',
    receiverName: '',
  })

  const disabled = useMemo(
    () =>
      !formData.description ||
      !formData.amount ||
      !formData.receiverName ||
      loading,
    [formData, loading],
  )
  const handleInput = ({ target }) => {
    setFormState((s) => ({
      ...s,
      [target.name]: target.value,
    }))
  }

  const handleValidateTag = async () => {
    if (formData.receiver) {
      setDisplay((s) => ({ ...s, validated: 'validating' }))
      const response = await validateFluxId(formData.receiver)
      if (response) {
        if (response.status === 200) {
          setDisplay((s) => ({ ...s, validated: true }))
          setFormState((s) => ({
            ...s,
            receiverName: response.response.full_name,
            receiver: response.response.pk,
          }))
        }
      } else {
        setDisplay(initState)
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { receiverName, ...rest } = formData

    if (
      formValidator(
        document.forms['request--form'].getElementsByTagName('input'),
      )
    ) {
      try {
        setDisplay((s) => ({ ...s, loading: true }))
        const { status } = await sendRequest(rest)
        if (status === 200) {
          notify.show('Successfully sent request', 'error')
          setTimeout(() => {
            history.goBack()
          }, 500)
        }
      } catch {
        setDisplay((s) => ({ ...s, loading: false }))
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
              required={true}
            />
            <InputGroup
              name="receiver"
              placeholder={'Flux ID'}
              value={formData.receiver}
              onChange={(e) => {
                setFormState((s) => ({ ...s, receiverName: '' }))
                handleInput(e)
              }}
              required={true}
              onBlur={handleValidateTag}
            />

            {validated ? (
              <div className="recipiantName--container">
                {validated === 'validating' ? (
                  <Spinner />
                ) : (
                  <p className={error ? 'u--status__error' : ''}>
                    {formData.receiverName}
                  </p>
                )}
              </div>
            ) : (
              <div className="recipiantName--container">
                <p className="u--typo__normal">Recipient Name</p>
              </div>
            )}
            <InputGroup
              name="description"
              value={formData.description}
              placeholder={'Description'}
              onChange={handleInput}
              required={true}
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
