const initState = {
  authenticated: false,
  userData: {},
}

const UserReducer = (state = initState, action) => {
  const { type, data } = action
  console.log(action)
  switch (type) {
    case 'LOGIN_USER':
      return { ...state, authenticated: data }
    case 'USER_DATA':
      return { ...state, userData: data }
    default:
      return state
  }
}

export default UserReducer
