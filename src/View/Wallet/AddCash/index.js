import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Modal, Spinner, Button } from '../../../UI'
import Container from './styles'

const AddCash = () => {
  const history = useHistory()
  const { personalBankInfo } = useSelector((state) => state.user)

  return (
    <Container>
      <Modal
        className="modal--size__sm modal--close__relative"
        modalTitle={'Payment Account'}
        showModal={true}
      >
        <div className="addCash--container">
          <div className="accNo--container">
            {personalBankInfo ? (
              <>
                <h2 className="instruction">
                  Please pay into this bank account
                </h2>
                <h3 className="u--typo__headline">
                  {personalBankInfo.account_no}
                </h3>
                <div className="bankInfo">
                  <h4 className="u--typo__normalBold">
                    {personalBankInfo.bank_name} Bank
                  </h4>
                  <h4 className="u--typo__normalBold">
                    {personalBankInfo.account_name}
                  </h4>
                </div>
              </>
            ) : (
              <div className="spinner--container">
                <Spinner />
              </div>
            )}
          </div>
          <footer>
            <hr />
            <Button rounded full onClick={() => history.goBack()}>
              I've paid
            </Button>
          </footer>
        </div>
      </Modal>
    </Container>
  )
}

export default AddCash
