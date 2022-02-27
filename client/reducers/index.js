import { combineReducers } from 'redux'

import user from './user'
import listings from './listings'

export default combineReducers({
  user,
  listings
})
