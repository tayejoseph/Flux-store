import axios from '../../lib/axios'

export const handleWithdrawal = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.post(
      '/wallet/v2/withdraw/',
      data,
    )
  } catch ({ response }) {}
}

export const fetchAllTransactions = () => async () => {
  try {
    const { status, data: response } = await axios.get('/transactions/v2/list/')
    console.log(response, 'Sdjskdkj')
  } catch ({ response }) {}
}

export const withdraw = (data) => async () => {
  try {
    const { status, data: response } = await axios.get(
      '/wallet/v2/withdraw/',
      data,
    )
    console.log({ status, response })
  } catch ({ response }) {}
}
