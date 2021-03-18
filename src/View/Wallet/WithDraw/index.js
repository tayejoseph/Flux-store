import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal, InputGroup } from '../../../UI'
import { fetchBanks } from '../../../store/actions/App'
import { withdraw } from '../../../store/actions/User'
import Container from './styles'

const WithDraw = () => {
  const dispatch = useDispatch()
  const { bankLists } = useSelector((s) => s.user)
  const [loading, setLoading] = useState(false)
  const [formData, setFormState] = useState({
    amount: '',
    bankName: '',
    acct_no: '',
    acct_name: '',
  })

  const handleInput = (e) => {
    setFormState({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { amount, acct_name, acct_no } = formData
      const { status, data: response } = await dispatch(
        withdraw({
          amount,
          acct_name,
          acct_no,
          bank_code: '058',
        }),
      )
    } catch {}
  }

  useEffect(() => {
    fetchBanks(dispatch)
  }, [dispatch])

  return (
    <Container>
      <Modal
        showModal={true}
        className="modal--size__sm modal--close__relative"
        modalTitle={'Withdraw'}
      >
        <form onSubmit={handleSubmit}>
          <div className="form--inputs">
            <p className="intro--txt">
              Enter the amount and account you wish to withdraw
            </p>
            <InputGroup
              placeholder={'₦0.00'}
              name="amount"
              onChange={handleInput}
              value={formData.amount}
            />
            {/* <InputGroup>
              <select
                placeholder={'Network'}
                name="bankName"
                onChange={handleInput}
              >
                <option value="volvo" disabled={true}>
                  Select Recipient's Network
                </option>
                {bankLists.map((item, index) => (
                  <option value={index} key={item.newort_code}>
                    {item.network_name}
                  </option>
                ))}
              </select>
            </InputGroup> */}
            <InputGroup
              placeholder={'Account Number'}
              name="acct_no"
              onChange={handleInput}
              value={formData.acct_no}
            />
            <div className="account--name">
              <p>Balogun Darius Olanrewaju</p>
            </div>
          </div>
          <footer>
            <Button full type="submit" rounded loading={loading}>
              Withdraw
            </Button>
          </footer>
        </form>
      </Modal>
    </Container>
  )
}

export default WithDraw
