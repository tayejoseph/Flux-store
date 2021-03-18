import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Modal, Button } from '../../UI'
import SideNav from './SideNav'
import AccForm from './AccForm'
import PasswordForm from './PasswordForm'
import Container from './styles'

const Settings = () => {
  const [displaySec, setDisplay] = useState('accForm')
  const [formData, setFormState] = useState({
    title: '',
    description: '',
    amount: '',
    quantity: '',
    delivery: '',
  })
  const { state, pathname } = useLocation()
  const history = useHistory()
  console.log(state)
  const handleFormInput = ({ target }) => {
    setFormState({
      ...formData,
      [target.name]: target.value,
    })
  }
  return (
    <Container>
      <Modal
        showModal={true}
        onClose={() => history.push('/dashboard/store')}
        className="modal--size__md modal--close__relative"
      >
        <div className="productForm--container">
          <header>
            <h2 className="u--typo__title">Settings</h2>
          </header>
          <main>
            <SideNav {...{ displaySec, setDisplay }} />
            <form>
              {displaySec === 'accForm' ? (
                <AccForm {...{ handleFormInput, formData }} />
              ) : (
                <PasswordForm {...{ handleFormInput, formData }} />
              )}
            </form>
          </main>
          <footer>
            <div className="next--container">
              <Button
                rounded
                onClick={() =>
                  history.push(pathname, { section: 'passwordForm' })
                }
              >
                {displaySec === 'accForm' ? 'Update' : 'Change'}
              </Button>
            </div>
          </footer>
        </div>
      </Modal>
    </Container>
  )
}

export default Settings
