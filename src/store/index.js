import { combineReducers } from 'redux'
import AppReducer from './reducers/App'
import UserReducer from './reducers/User'

const rootReducer = combineReducers({
  user: UserReducer,
  app: AppReducer,
})

export default rootReducer
