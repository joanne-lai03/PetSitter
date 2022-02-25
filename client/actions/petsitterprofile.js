import { showError } from '../actions/error'
import { addPetSitter } from '../apis/petSitters'

export const SUBMIT_LISTING_PENDING = 'SUBMIT_LISTING_PENDING'
export const SUBMIT_LISTING_SUCCESS = 'SUBMIT_LISTING_SUCCESS'

export function submitListingPending () {
  return {
    type: SUBMIT_LISTING_PENDING
  }
}

export function submitListingSuccess (orders) {
  return {
    type: SUBMIT_LISTING_SUCCESS,
    orders: orders
  }
}

export function submitListing (listing) {
  return (dispatch) => {
    dispatch(submitListingPending())
    return addPetSitter(listing) // posted api (here)
      .then((listing) => {
        dispatch(submitListingSuccess(listing))
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
