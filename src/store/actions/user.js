import axios from '../../lib/axios'
import { toast } from 'react-toastify'
import handleError from '../../lib/handleError'
import {
  ALT_TRANSACTION_LISTS,
  USER_DATA,
  ALT_NOTIFICATION,
  ALT_REQUEST_LISTS,
  ALT_CATELOG,
  ALT_GIFT_LISTS,
} from '../type'

const altTransactionLists = (data) => ({
  type: ALT_TRANSACTION_LISTS,
  data,
})

export const initUserData = (data) => ({
  type: USER_DATA,
  data,
})

export const altNotification = (data) => ({
  type: ALT_NOTIFICATION,
  data,
})

export const altCatalog = (data) => ({
  type: ALT_CATELOG,
  data,
})

export const altGiftLists = (data) => ({
  type: ALT_GIFT_LISTS,
  data,
})

export const altRequestLists = (data) => ({
  type: ALT_REQUEST_LISTS,
  data,
})

export const getUserDetails = (data) => async (dispatch) => {
  console.log(data)
  try {
    const { status, data: response } = await axios.get('/auth/user/')
    if (status === 200) {
      console.log(response, 'sdjksdjsdksj')
      // dispatch(initUserData(response))
    }
    return { status, response }
  } catch ({ response }) {}
}

export const updateUserDetails = (data) => async (dispatch) => {
  try {
    const { status, data: response } = await axios.put('/auth/user/', data)
    console.log(status, response, 'sdskksjdkj')
    if (status === 200) {
      toast.success('Successfully update account information')
      dispatch(initUserData(response))
    }
    return { status, response }
  } catch ({ response }) {
    handleError(response)
  }
}

export const changeUserPassword = (data) => async () => {
  try {
    const { status } = await axios.post('/auth/password/change/', data)
    if (status === 200) {
      toast.success('Successfully changed user password')
    }
    return { status }
  } catch ({ response }) {
    handleError(response)
  }
}

export const getUserNotifications = () => async (dispatch) => {
  try {
    const { status, data: response } = await axios.get('/notifications/')
    if (status === 200) {
      dispatch(altNotification(response))
    }
    console.log({ status, response }, 'Sdjksdjkjsdksjd')
  } catch ({ response }) {}
}

export const handleWithdrawal = (data) => async (dispatch, getState) => {
  try {
    console.log(data, 'sdjskdksdksj')
    // const { status, data: response } = await axios.post(
    //   '/wallet/v2/withdraw/',
    //   data,
    // )
    // return { status, response }
    return {}
  } catch ({ response }) {
    handleError(response)
  }
}

export const fetchAllTransactions = () => async (dispatch) => {
  try {
    const { status, data: response } = await axios.get('/transactions/v2/list/')
    console.log({ status, response }, 'Sdjsdsjks')
    if (status === 200) {
      dispatch(altTransactionLists(response.results))
    }
  } catch ({ response }) {
    dispatch(altTransactionLists([]))
    handleError(response)
  }
}

export const withdraw = (data) => async () => {
  try {
    const { status, data: response } = await axios.get(
      '/wallet/v2/withdraw/',
      data,
    )
    console.log({ status, response })
  } catch ({ response }) {
    handleError(response)
  }
}

// Store
export const fetchCatalog = () => async (dispatch, getState) => {
  const {
    userData: { pk },
  } = getState().user
  try {
    const { status, data: response } = await axios.get(`/catalogs/v1/${pk}/`)
    if (status === 200) {
      dispatch(altCatalog(response.results))
    }
    console.log({ status, response }, 'sdskdjsdkj')
  } catch ({ response }) {}
}

export const updateCatalog = (data) => async (dispatch) => {
  try {
    const { status, data: response } = await axios.post('/catalogs/v1/7/', data)
    console.log({ status, response }, 'sdskdjsdkj')
  } catch ({ response }) {}
}

export const addCatalog = (data) => async (dispatch) => {
  console.log(data, 'sdsjkdsdksdkj')
  try {
    const { status, data: response } = await axios.post('/catalogs/v1/', data)
    console.log({ status, response })
  } catch ({ response }) {
    handleError(response)
  }
}

export const getGiftLists = () => async (dispatch) => {
  try {
    const { status, data: response } = await axios.get('/gift/')
    if (status === 200) {
      dispatch(altGiftLists(response))
    }
    console.log({ status, response }, 'sdksdlskdsldk')
  } catch ({ response }) {}
}

export const getRequestLists = () => async (dispatch) => {
  try {
    const { status, data: response } = await axios.get('/requests/v2/')
    if (status === 200) {
      dispatch(altRequestLists(response))
    }
    console.log({ status, response }, 'sdksdlskdsldk')
  } catch ({ response }) {}
}

export const getUserByFluxId = (id) => {
  return axios.get(`/users/details/?flux_tag=${id}`)
}

export const sendRequest = async (data) => {
  try {
    const { status, data: response } = await axios.post('/requests/v2/', data)
    console.log({ status, response }, 'Sdjsksjdskj')
    return { status, response }
  } catch ({ response }) {
    handleError(response)
  }
}
