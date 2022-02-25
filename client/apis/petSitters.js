import request from 'superagent'

const rootUrl = '/api/v1/petsitters'

export function getPetsitter () {
  return request
    .get(rootUrl + '/listing')
    .then(res => {
      return res.body
    })
}

// Submits a new pet sitter llisting through the form (clicking submit)
export function addPetSitter (listing) {
  return request
    .post(rootUrl)
    .send(listing)
}
