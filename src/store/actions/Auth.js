import axios from '../../lib/axios'
import Cookies from 'js-cookie'
import { LOGIN_USER, USER_DATA } from '../type'

export const initUserData = (data) => ({
  type: USER_DATA,
  data,
})

export const loginHandler = (data) => ({
  type: LOGIN_USER,
  data,
})

export const loginUser = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.post('/auth/login/', data)
    if (status === 200) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `bearer-${response.token}`
      Cookies.set('token', response.token)
      dispatch(loginHandler(true))
      dispatch(initUserData(response.user))
    }
    return { status, response }
  } catch ({ response }) {
    console.log(response.data, 'Sdjsdjk')
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
      dispatch(loginHandler(true))
      dispatch(initUserData(response.user))
    }
    return { status, response }
  } catch ({ response }) {
    console.log(response.data, 'Sdjsdjk')
  }
}

export const logOut = () => async (dispatch) => {
  dispatch(initUserData({}))
  dispatch(loginHandler(false))
}
