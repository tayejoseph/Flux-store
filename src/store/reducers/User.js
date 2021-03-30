const initState = {
  authenticated: false,
  userData: {},
  transactionLists: '',
  notificationData: '',
  catalogues: '',
  giftLists: '',
  requestLists: '',
  cardLists: '',
  personalBankInfo: '',
}

const UserReducer = (state = initState, action) => {
  const { type, data } = action
  console.log(action)
  switch (type) {
    case 'LOGIN_USER':
      return { ...state, authenticated: data }
    case 'LOGOUT_USER':
      return initState
    case 'ALT_TRANSACTION_LISTS':
      return { ...state, transactionLists: data }
    case 'ALT_NOTIFICATION':
      return { ...state, notificationData: data }
    case 'USER_DATA':
      return { ...state, userData: data }
    case 'ALT_CATELOG':
      return { ...state, catalogues: data }
    case 'ALT_REQUEST_LISTS':
      return { ...state, requestLists: data }
    case 'ALT_GIFT_LISTS':
      return { ...state, giftLists: data }
    case 'ALT_CARDLISTS':
      return { ...state, cardLists: data }
    case 'ALT_PERSONALBANK_INFO':
      return { ...state, personalBankInfo: data }

    default:
      return state
  }
}

export default UserReducer
