/** @flow */
import { notify } from 'react-notify-toast'

const handleError = (error) => {
  let errorMessage = ''
  if (error) {
    const { data } = error
    if (typeof data !== 'object') {
      errorMessage = 'An error occurred, please try again'
    } else {
      for (let error of Object.values(data)) {
        errorMessage = `${errorMessage}${
          error !== null || error !== void 0 ? `${error}` : ''
        }`
      }
    }
  } else {
    errorMessage = 'An error occurred, check your internet connection'
  }
  notify.show(errorMessage, 'error')
}

export default handleError
