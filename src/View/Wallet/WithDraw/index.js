import React, { useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { formValidator } from '../../../helpers'
import { Button, Modal, InputGroup, Spinner } from '../../../UI'
import { validateAccNo } from '../../../store/actions/app'
import { handleWithdrawal } from '../../../store/actions/user'
import { BankLists } from '../../../Constants'
import Container from './styles'

const WithDraw = () => {
  const dispatch = useDispatch()
  const [{ loading, validated, error }, setDisplay] = useState({
    loading: false,
    error: false,
    validated: false,
  })

  const disabled = useMemo(() => loading || validated !== true, [
    loading,
    validated,
  ])

  const [formData, setFormState] = useState({
    amount: '',
    account_no: '',
    acct_name: 'Account Name',
    bank_code: '',
  })

  const handleInput = (e) => {
    setDisplay((s) => ({ ...s, validated: false, error: false }))
    setFormState({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (
      (e.target.name === 'account_no' || e.target.name === 'amount') &&
      e.target.value.length === 10
    ) {
      initBankValidation()
    }
  }

  const initBankValidation = async () => {
    const { account_no, amount, bank_code } = formData
    if (account_no && amount && bank_code) {
      setDisplay((s) => ({ ...s, validated: 'validating' }))
      const { status, data: response } = await validateAccNo({
        account_no,
        bank_code,
      })
      if (status === 200) {
        setDisplay((s) => ({ ...s, validated: true }))
        if (response.status === 'error') {
          setDisplay((s) => ({ ...s, validated: true, error: true }))
          setFormState((s) => ({
            ...s,
            acct_name: 'Invalid Account Number',
          }))
        } else {
          setDisplay((s) => ({ ...s, validated: true }))
          setFormState((s) => ({
            ...s,
            acct_name: response.data.account_name,
          }))
        }
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      formValidator(
        document.forms['withdraw--form'].getElementsByTagName('input'),
      )
    ) {
      try {
        setDisplay((s) => ({ ...s, loading: true }))
        const { status } = await dispatch(handleWithdrawal(formData))
        if (status === 200) {
          setDisplay((s) => ({ ...s, loading: false }))
        }
      } finally {
        setDisplay((s) => ({ ...s, loading: false }))
      }
    }
  }

  return (
    <Container>
      <Modal
        showModal={true}
        className="modal--size__sm modal--close__relative"
        modalTitle={'Withdraw'}
      >
        <form onSubmit={handleSubmit} name="withdraw--form" noValidate>
          <div className="form--inputs">
            <p className="intro--txt">
              Enter the amount and account you wish to withdraw
            </p>
            <InputGroup
              placeholder={'₦0.00'}
              name="amount"
              onBlur={initBankValidation}
              onChange={handleInput}
              value={formData.amount}
            />
            <InputGroup>
              <select
                placeholder={'Network'}
                name="bank_code"
                onChange={handleInput}
              >
                <option value="" disabled={true}>
                  Select Recipient's Network
                </option>
                {BankLists.map((item, index) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </InputGroup>
            <InputGroup
              placeholder={'Account Number'}
              name="account_no"
              type="number"
              onChange={handleInput}
              onBlur={initBankValidation}
              value={formData.account_no}
            />
            {validated && (
              <div className="account--name">
                {validated === 'validating' ? (
                  <Spinner />
                ) : (
                  <p className={error ? 'u--status__error' : ''}>
                    {formData.acct_name}
                  </p>
                )}
              </div>
            )}
          </div>
          <footer>
            <Button
              full
              rounded
              loading={loading}
              disabled={disabled}
              type="submit"
            >
              Withdraw
            </Button>
          </footer>
        </form>
      </Modal>
    </Container>
  )
}

export default WithDraw
