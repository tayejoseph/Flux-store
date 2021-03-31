import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, NavLink, useLocation } from 'react-router-dom'
import { logOut } from '../../../store/actions/Auth'
import { Button } from '../../../UI'
import Container from './styles'

const SideNav = ({ setDisplay, displaySec }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const location = useLocation()
  const bgLocation = useRef(location.state.background)
  return (
    <Container>
      <nav>
        <NavLink
          to={{
            pathname: '/dashboard/settings/accVerification',
            state: { background: bgLocation.current },
          }}
        >
          Account Verification
        </NavLink>
        <NavLink
          to={{
            pathname: '/dashboard/settings/userType',
            state: { background: bgLocation.current },
          }}
        >
          User Type
        </NavLink>
        <NavLink
          to={{
            pathname: '/dashboard/settings/changePassword',
            state: { background: bgLocation.current },
          }}
        >
          Change Password
        </NavLink>
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
