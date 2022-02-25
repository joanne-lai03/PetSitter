import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import listing from './listing'

export default combineReducers({
  users,
  user,
  listing
})
