import axios from '../../lib/axios'
import Cookies from 'js-cookie'
import handleError from '../../lib/handleError'
import { LOGIN_USER, LOGOUT_USER } from '../type'
import { initUserData } from './User'

export const loginHandler = (data) => ({
  type: LOGIN_USER,
  data,
})

export const logoutUser = () => ({
  type: LOGOUT_USER,
})

export const loginUser = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.post('/auth/login/', data)
    if (status === 200) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `bearer-${response.token}`
      Cookies.set('token', response.token)
      dispatch(initUserData(response.user))
      if (response.user.full_name) dispatch(loginHandler(true))
    }
    return { status, response }
  } catch ({ response }) {
    handleError(response)
  }
}

export const signUpUser = ({ email, password: password1 }) => async (
  dispatch,
  getState,
) => {
  try {
    const { status, data: response } = await axios.post('/auth/register/', {
      email,
      password1,
    })
    if (status === 201) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `bearer-${response.token}`
      Cookies.set('token', response.token)
      dispatch(initUserData(response.user))
    }
    return { status, response }
  } catch ({ response }) {
    handleError(response)
  }
}

export const logOut = () => async (dispatch) => {
  dispatch(logoutUser())
}
