import React, { useState, useEffect, useMemo } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUpUser, loginUser } from '../../store/actions/Auth'
import { InputGroup, Button, Checkbox } from '../../UI'
import { formValidator } from '../../helpers'
import fluxLogo from '../../assets/Flux Logo@2x.png'
import Container from './styles'

const Auth = () => {
  const {
    params: { authMethod },
  } = useRouteMatch()
  const dispatch = useDispatch()
  const [{ loading }, setState] = useState({ loading: false })
  const [{ showPassword }, setDisplay] = useState({
    showPassword: false,
  })
  const [formData, setFormState] = useState({
    email: '',
    password: '',
  })

  const disabled = useMemo(
    () => !formData.email || !formData.password || loading,
    [formData, loading],
  )

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
      [target.name]: target.value.trim(),
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      formValidator(document.forms['auth--form'].getElementsByTagName('input'))
    ) {
      try {
        setState((s) => ({ ...s, loading: true }))
        authMethod === 'logIn'
          ? await dispatch(loginUser(formData))
          : await dispatch(signUpUser(formData))
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
            <div className="img--container">
              <img src={fluxLogo} alt="Flux" />
            </div>
            <h2 className="u--typo__headline">
              {authMethod === 'logIn' ? 'Welcome!' : 'Sign Up'}
            </h2>
            <p className="u--typo__normal">
              {authMethod === 'logIn'
                ? 'Please log in to proceed'
                : 'Please enter your details to get started.'}
            </p>
            <hr />
          </header>

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
          <label className="showPassword--container">
            <Checkbox
              checked={showPassword}
              onChange={({ target }) =>
                setDisplay((s) => ({ ...s, showPassword: target.checked }))
              }
            />
            Show Password
          </label>
          <Button
            type="submit"
            className="aut--btn"
            loading={loading}
            disabled={disabled}
            rounded
            full
          >
            {authMethod === 'logIn' ? 'Log In' : 'Next'}
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
