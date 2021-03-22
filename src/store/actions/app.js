import axios from '../../lib/axios'
import { ALT_DATA_PLAN } from '../type'

const altDataPlans = (data) => ({
  type: ALT_DATA_PLAN,
  data,
})

export const validateAccNo = async (data) => {
  return await axios.post('/users/verify/account/', data)
}

export const fetchDataPlan = async (dispatch) => {
  try {
    const { status, data: response } = await axios.get('/others/v2/data_plans/')
    console.log(status, response)
    if (status === 200) {
      dispatch(altDataPlans(response.message.details))
    }
  } catch ({ response }) {}
}

export const handleDataTopUp = (data) => async () => {
  try {
    const { status, data: response } = await axios.post(
      '/others/v2/data/',
      data,
    )
    console.log(response, 'sdjksdksj')
  } catch ({ response }) {}
}

export const handleAirTimeTopUp = (data) => async () => {
  try {
    const { status, data: response } = await axios.post(
      '/others/v2/airtime/',
      data,
    )
    console.log(response)
  } catch ({ response }) {}
}
