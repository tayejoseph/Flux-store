import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logOut } from '../../../store/actions/Auth'
import { Button } from '../../../UI'
import Container from './styles'

const SideNav = ({ setDisplay, displaySec }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <Container>
      <nav>
        <Button
          tertiary
          full
          className={displaySec === 'accForm' && 'active'}
          onClick={() => setDisplay('accForm')}
        >
          Account Verification
        </Button>
        <Button
          tertiary
          full
          className={displaySec === 'userType' && 'active'}
          onClick={() => setDisplay('userType')}
        >
          User Type
        </Button>
        <Button
          full
          className={displaySec === 'passwordForm' && 'active'}
          tertiary
          onClick={() => setDisplay('passwordForm')}
        >
          Change Password
        </Button>
        <hr />
        <Button
          tertiary
          className="btn--logout"
          onClick={() => {
            dispatch(logOut())
            history.push('/')
          }}
        >
          Logout
        </Button>
      </nav>
    </Container>
  )
}

export default SideNav
