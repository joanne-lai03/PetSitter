import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import petsitterListing from './petsitterListing'

export default combineReducers({
  users,
  user,
  petsitterListing
})
