import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import listings from './listings'

export default combineReducers({
  users,
  user,
  listings
})
