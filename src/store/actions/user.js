import axios from '../../lib/axios'
import { notify } from 'react-notify-toast'
import handleError from '../../lib/handleError'
import {
  ALT_TRANSACTION_LISTS,
  USER_DATA,
  ALT_NOTIFICATION,
  ALT_REQUEST_LISTS,
  ALT_CATELOG,
  ALT_GIFT_LISTS,
  ALT_VIRTUAL_CARDS_LISTS,
  ALT_CARDLISTS,
  ALT_PERSONALBANK_INFO,
} from '../type'

const altTransactionLists = (data) => ({
  type: ALT_TRANSACTION_LISTS,
  data,
})

const altPersonalBankInfo = (data) => ({
  type: ALT_PERSONALBANK_INFO,
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

export const altVirtualCardLists = (data) => ({
  type: ALT_VIRTUAL_CARDS_LISTS,
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

export const altCardLists = (data) => ({
  type: ALT_CARDLISTS,
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
      notify.show('Successfully update account information', 'success')
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
      notify.show('Successfully changed user password', 'success')
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
      dispatch(altNotification(response.results))
    }
    console.log({ status, response }, 'Sdjksdjkjsdksjd')
  } catch ({ response }) {}
}

export const handleWithdrawal = (data) => async (dispatch, getState) => {
  try {
    console.log(data, 'sdjskdksdksj')
    const { status, data: response } = await axios.post(
      '/wallet/v2/withdraw/',
      data,
    )
    // const transactionLists = await dispatch(fetchAllTransactions())
    // if (transactionLists.status === 200) {
    return { status, response }
    // }
    // console.log(transactionLists, 'sdjksdjk')
  } catch ({ response }) {
    handleError(response)
  }
}

export const fetchCards = () => async (dispatch) => {
  try {
    const { status, data: response } = await axios.get('/users/cards/')
    console.log({ status, response }, 'Sdjsdsjks')
    if (status === 200) {
      dispatch(altCardLists(response.results))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const getPersonalBankInfo = () => async (dispatch) => {
  try {
    const { status, data: response } = await axios.get('/users/bank_account/')
    console.log({ status, response }, 'Sdjsdsjks')
    if (status === 200) {
      dispatch(altPersonalBankInfo(response))
    }
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
      return { status, data: response }
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

export const changeUserType = (data) => async () => {
  try {
    const { status, data: response } = await axios.post(
      '/users/account_change/',
      data,
    )
    console.log(response, 'sdjsdksjdskj')
    if (status === 200) {
      // altCatalog(response.results)
    }
    console.log({ status, response }, 'sdskdjsdkj')
  } catch ({ response }) {
    handleError(response)
  }
}

// Store
export const fetchCatalog = () => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get(`/catalogs/v1/`)
    if (status === 200) {
      dispatch(altCatalog(response.results))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const updateCatalog = (data) => async (dispatch, getState) => {
  const { business_info, ref, ...rest } = data
  const { catalogues } = getState().user
  try {
    const { status, data: response } = await axios.put(`/catalogs/v1/${ref}/`, {
      ...rest,
    })
    if (status === 200) {
      const index = catalogues.findIndex((item) => item.ref === ref)
      catalogues.splice(index, 1, data)
    }
    return { status, response }
  } catch ({ response }) {
    handleError(response)
  }
}

export const addCatalog = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.post('/catalogs/v1/', data)
    return { status, response }
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
      dispatch(altRequestLists(response.result))
    }
    console.log({ status, response }, 'sdksdlskdsldk')
  } catch ({ response }) {}
}

export const getUserByFluxId = (id) => {
  return axios.get(`/users/details/?flux_tag=${id}`)
}

export const fetchVirtualCards = () => async (dispatch) => {
  try {
    const { status, data: response } = await axios.get('/virtual_cards/')
    console.log({ status, response }, 'Sdjsdsjks')
    if (status === 200) {
      dispatch(altVirtualCardLists(response.results))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const fundVirtualCards = (data) => async (dispatch) => {
  try {
    const { status, data: response } = await axios.post(
      '/virtual_cards/fund/',
      data,
    )
    console.log({ status, response }, 'Sdjsdsjks')
    if (status === 200) {
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const withdrawVirtualCards = (data) => async () => {
  try {
    const { status, data: response } = await axios.post(
      '/virtual_cards/withdraw/',
      data,
    )
    console.log({ status, response }, 'Sdjsdsjks')
    if (status === 200) {
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const blockUnblockVirtualCards = (data) => async () => {
  try {
    const { status, data: response } = await axios.post(
      '/virtual_cards/status/',
      data,
    )
    console.log({ status, response }, 'Sdjsdsjks')
    if (status === 200) {
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const terminateVirtualCards = (data) => async (dispatch) => {
  try {
    const { status, data: response } = await axios.post(
      '/virtual_cards/terminate/',
      data,
    )
    console.log({ status, response }, 'Sdjsdsjks')
    if (status === 200) {
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const createVirtualCard = (data) => async (dispatch) => {
  try {
    const { status, data: response } = await axios.post(
      '/virtual_cards/create/',
      data,
    )
    if (status === 200) {
    }
    console.log({ status, response }, 'sdksdlskdsldk')
  } catch ({ response }) {
    handleError(response)
  }
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

export const validateFluxId = async (id) => {
  try {
    const { status, data: response } = await axios.get(
      `/users/details/?flux_tag=${id}`,
    )
    return { status, response }
  } catch ({ response }) {
    handleError(response)
  }
}

export const sendMoney = (data) => async (dispatch, getState) => {
  const { pk } = getState().user.userData
  try {
    const { status, data: response } = await axios.post('/transactions/v2/', {
      ...data,
      receiver: pk,
    })
    console.log({ status, response }, 'Sdjsksjdskj')
    return { status, response }
  } catch ({ response }) {
    handleError(response)
  }
}
