const initState = {
  loading: false,
  dataPlans: '',
  bankLists: '',
}

const AppReducer = (state = initState, action) => {
  const { type, data } = action
  switch (type) {
    case 'ALT_DATA_PLAN':
      return {
        ...state,
        dataPlans: data,
      }
    default:
      return state
  }
}

export default AppReducer
