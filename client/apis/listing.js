import request from 'superagent'

// router.get in petsitters
export function getListing () {
  return request
    .get('api/v1/petsitters')
    .then((res) => res.body)
}

// add listing
export function postListing (listing) {
  return request
    .post('api/v1/petsitters')
    .send(listing)
}

// === stretch (delete) ===
export function deleteListing (id) {
  const idForDeleteListing = { id }

  return request
    .delete('api/v1/petsitters')
    .send(idForDeleteListing)
    .then(res => res.body)
}
