import request from 'superagent'

const rootUrl = '/api/v1/petsitters'

export function getPetsitter () {
  return request
    .get(rootUrl + '/listing')
    .then(res => {
      return res.body
    })
}

export function addPetsitter (user) {
  return request
    .post(rootUrl + '/listing')
    .send(user)
}
