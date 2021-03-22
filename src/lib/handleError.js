/** @flow */
import { toast } from 'react-toastify'

type arg = {
  data: Object,
}

const handleError = ({ data }: arg) => {
  let errorMessage = ''

  if (typeof data !== 'object') {
    errorMessage = 'An error occurred, please try again'
  } else {
    for (let error of Object.values(data)) {
      errorMessage = `${errorMessage}${
        error !== null || error !== void 0 ? `${error}` : ''
      }`
    }
  }
  toast.error(errorMessage)
}

export default handleError
