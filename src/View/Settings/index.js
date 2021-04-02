import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Route } from 'react-router-dom'
import { Modal, Button } from '../../UI'
import { formValidator } from '../../helpers'
import {
  updateUserDetails,
  changeUserPassword,
  changeUserType,
} from '../../store/actions/user'
import SideNav from './SideNav'
import AccForm from './AccForm'
import PasswordForm from './PasswordForm'
import UserTypeForm from './UserTypeForm'
import Container from './styles'

const Settings = () => {
  const { userData } = useSelector((s) => s.user)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [displaySec, setDisplay] = useState('accForm')
  const [formData, setFormState] = useState({})
  const history = useHistory()

  const handleInput = ({ target }) => {
    setFormState({
      ...formData,
      [target.name]: target.value,
    })
  }

  useEffect(() => {
    if (displaySec === 'userType') {
      setFormState({
        name: '',
        account_type: userData.business ? 'business' : 'normal',
      })
    } else {
      setFormState({})
    }
  }, [displaySec, userData.business])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (displaySec !== 'userType') {
      if (
        formValidator(
          document.forms['acc--form'].getElementsByTagName('input'),
        ) &&
        Object.keys(formData).length > 0
      ) {
        try {
          setLoading(true)
          displaySec === 'accForm'
            ? await dispatch(
                updateUserDetails({ username: userData.username, ...formData }),
              )
            : dispatch(changeUserPassword(formData))
          setLoading(false)
        } finally {
          setLoading(false)
        }
      }
    } else {
      if (
        formValidator(
          document.forms['acc--form'].getElementsByTagName('input'),
        ) &&
        Object.keys(formData).length > 0
      ) {
        try {
          setLoading(true)
          dispatch(changeUserType({ ...formData }))
          setLoading(false)
        } finally {
          setLoading(false)
        }
      }
    }
  }
  return (
    <Container>
      <Modal
        showModal={true}
        onClose={() => history.goBack()}
        className="modal--size__md modal--close__relative"
      >
        <div className="productForm--container">
          <header>
            <h2 className="u--typo__title">Settings</h2>
          </header>
          <main>
            <SideNav {...{ displaySec, setDisplay }} />
            <form onSubmit={handleSubmit} name="acc--form" noValidate>
              <Route path={`/dashboard/settings/changePassword`} exact={true}>
                <PasswordForm {...{ handleInput, userData }} />
              </Route>
              <Route path={`/dashboard/settings/accVerification`} exact={true}>
                <AccForm {...{ handleInput, userData }} />
              </Route>
              <Route path={`/dashboard/settings/userType`} exact={true}>
                <UserTypeForm {...{ handleInput, formData }} />
              </Route>
            </form>
          </main>
          <footer>
            <div className="next--container">
              <Button rounded loading={loading} onClick={handleSubmit}>
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
