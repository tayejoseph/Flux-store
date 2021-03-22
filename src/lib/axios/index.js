import axios from 'axios'
import Cookies from 'js-cookie'
import NProgress from '../nprogress'

const server = axios.create({
  baseURL: 'https://beta-api.fluxapi.co.uk',
  headers: { 'Content-Type': 'application/json' },
})

server.interceptors.request.use((config) => {
  const token = Cookies.get('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  NProgress.start()
  return config
})

server.interceptors.response.use(
  (response) => {
    NProgress.done()
    return response
  },
  (err) => {
    NProgress.done()
    return Promise.reject(err)
  },
)

export default server
