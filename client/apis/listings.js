import request from 'superagent'

// router.get in petsitters
export function getListing () {
  return request
    .get('api/v1/petsitters')
    .then(res => {
      console.log('from api', res.body)
      return res.body
    })
  // << if you need MOCK DATA>>
  // return Promise.resolve([{
  //   id: 1,
  //   name:'Ahmad' .....
  // }])
}

// add listing
export function postListing (listing) {
  return request
    .post('api/v1/petsitters')
    .send(listing)
}

// dlelet listing
export function deleteListing (id) {
  return request
    .delete('api/v1/petsitters')
    .send({ id })
    .then(res => res.body)
}