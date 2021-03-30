import React, { useState, useEffect, useMemo } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signUpUser, loginUser, loginHandler } from '../../store/actions/Auth'
import { updateUserDetails } from '../../store/actions/user'
import { InputGroup, Button, Checkbox } from '../../UI'
import { formValidator } from '../../helpers'
import fluxLogo from '../../assets/Flux Logo@2x.png'
import Container from './styles'

const Auth = () => {
  const {
    params: { authMethod },
  } = useRouteMatch()
  const { userData } = useSelector((s) => s.user)
  const history = useHistory()
  const dispatch = useDispatch()
  const [{ loading }, setState] = useState({ loading: false })
  const [{ showPassword }, setDisplay] = useState({
    showPassword: false,
  })
  const [formData, setFormState] = useState({
    email: '',
    password: '',
    full_name: '',
    phone: '',
  })

  const disabled = useMemo(() => {
    if (authMethod !== 'complete-setup')
      return !formData.email || !formData.password || loading
    else return !formData.full_name || !formData.phone || loading
  }, [formData, loading, authMethod])

  useEffect(() => {
    setDisplay((s) => ({ ...s, showPassword: false }))
    setFormState((s) => ({
      ...s,
      password: '',
    }))
  }, [authMethod])

  const handleInput = ({ target }) => {
    setFormState({
      ...formData,
      [target.name]:
        target.name !== 'full_name' ? target.value.trim() : target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      formValidator(document.forms['auth--form'].getElementsByTagName('input'))
    ) {
      try {
        const { full_name, phone } = formData
        setState((s) => ({ ...s, loading: true }))
        const response =
          authMethod === 'logIn'
            ? await dispatch(loginUser(formData))
            : authMethod === 'complete-setup'
            ? await dispatch(
                updateUserDetails({
                  username: userData.username,
                  full_name,
                  phone,
                }),
              )
            : await dispatch(signUpUser(formData))
        if (response && (response.status === 201 || response.status === 200)) {
          if (authMethod === 'complete-setup') {
            dispatch(loginHandler(true))
          } else {
            history.push('/auth/complete-setup')
          }
        }
      } finally {
        setState((s) => ({ ...s, loading: false }))
      }
    }
  }

  return (
    <Container>
      <div className="auth--content__container">
        <form onSubmit={handleSubmit} name="auth--form" noValidate>
          <header>
            <Link to="/" className="img--container">
              <img src={fluxLogo} alt="Flux" />
            </Link>
            <h2 className="u--typo__headline">
              {authMethod === 'logIn'
                ? 'Welcome!'
                : authMethod === 'complete-setup'
                ? 'Complete your account setup'
                : 'Sign Up'}
            </h2>
            <p className="u--typo__normal">
              {authMethod === 'logIn'
                ? 'Please log in to proceed'
                : authMethod === 'complete-setup'
                ? 'Please enter your profile details below'
                : 'Please enter your details to get started.'}
            </p>
            <hr />
          </header>

          {authMethod === 'complete-setup' ? (
            <>
              <InputGroup
                placeholder="John Doe"
                name="full_name"
                label="Full Name"
                required={true}
                value={formData.full_name}
                autoComplete={'username'}
                onChange={handleInput}
                autoFocus={true}
              />
              <InputGroup
                label={'Phone Number'}
                placeholder={'08453453407'}
                value={formData.phone}
                name={'phone'}
                type={'tel'}
                min={'11'}
                max={'11'}
                onChange={handleInput}
                required
              />
            </>
          ) : (
            <>
              <InputGroup
                type="email"
                placeholder="john.doe@example.com"
                name="email"
                label="Email Address"
                required={true}
                autoComplete={'username'}
                value={formData.email}
                onChange={handleInput}
              />
              <InputGroup
                label={'Password'}
                type={showPassword ? 'text' : 'password'}
                placeholder="********"
                name="password"
                required={true}
                autoComplete={'current-password'}
                value={formData.password}
                onChange={handleInput}
              />
            </>
          )}

          {authMethod !== 'complete-setup' && (
            <label className="showPassword--container">
              <Checkbox
                checked={showPassword}
                onChange={({ target }) =>
                  setDisplay((s) => ({ ...s, showPassword: target.checked }))
                }
              />
              Show Password
            </label>
          )}
          <Button
            type="submit"
            className="aut--btn"
            loading={loading}
            disabled={disabled}
            rounded
            full
          >
            {authMethod === 'logIn'
              ? 'Log In'
              : authMethod === 'complete-setup'
              ? 'Submit'
              : 'Next'}
          </Button>
          {authMethod === 'logIn' && (
            <Button tertiary className="forgotPassword--btn">
              Forgot Password?
            </Button>
          )}
        </form>
        <p className="u--typo__normal">
          {authMethod === 'logIn' ? (
            <>
              Don't have an account yet?
              <Link to="/auth/signUp">Sign up here!</Link>
            </>
          ) : (
            <>
              Already have an account?
              <Link to={'/auth/logIn'}>Log in here!</Link>
            </>
          )}
        </p>
      </div>
    </Container>
  )
}

export default Auth
