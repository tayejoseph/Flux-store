import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { InputGroup, Button, Checkbox } from '../../UI'
import fluxLogo from '../../assets/Flux Logo@2x.png'
import { Link } from 'react-router-dom'
import Container from './styles'

const Auth = () => {
  const {
    params: { authMethod },
  } = useRouteMatch()
  const [formData, setFormState] = useState({
    email: '',
    password: '',
  })
  const handleInput = ({ target }) => {
    setFormState({
      ...formData,
      [target.name]: target.value,
    })
  }
  return (
    <Container>
      <div className="auth--content__container">
        <form>
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

          <InputGroup>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="john.doe@example.com"
              name="email"
              onChange={handleInput}
            />
          </InputGroup>
          <InputGroup>
            <label>Password</label>
            <input
              type="password"
              placeholder="********"
              name="password"
              onChange={handleInput}
            />
          </InputGroup>
          <InputGroup className="showPassword--container">
            <label>
              <Checkbox />
              Show Password
            </label>
          </InputGroup>
          <Button type="submit" className="aut--btn" rounded full>
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
