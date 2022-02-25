import { FETCH_LISTING_SUCCESS, DELETELISTING_FROM_LIST_SUCCESS } from '../actions/listing'

function listing (state = [], action) {
  switch (action.type) {
    case FETCH_LISTING_SUCCESS:
      return action.petsitters

    case DELETELISTING_FROM_LIST_SUCCESS:
      return state.filter(item => item.id !== action.id)

    default:
      return state
  }
}

export default listing
