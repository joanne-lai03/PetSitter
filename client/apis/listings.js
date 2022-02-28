import request from 'superagent'

const rootUrl = '/api/v1/petsitters'

// router.get in petsitters
export function getListing () {
  return request
    .get(rootUrl)
    .then(res => {
      return res.body
    })
  // << if you need MOCK DATA>>
  // return Promise.resolve([{
  //   id: 1,
  //   name:'Ahmad' .....
  // }])
}

// add listing
export function postListing (listing, token) {
  const newListing = {
    auth0Id: listing.auth0Id,
    id: listing.id,
    name: listing.name,
    location: listing.location,
    petNumber: listing.petNumber,
    petType: listing.petType,
    petSize: listing.petSize,
    homeType: listing.homeType,
    serviceRate: listing.serviceRate,
    availability: listing.availability,
    description: listing.description,
    promoListing: listing.promoListing

  }

  return request
    .post(rootUrl)
    .set('authorization', `Bearer ${token}`)
    .send(newListing)
    .then(res => res.body)
}

// dlelet listing
export function deleteListing (id, token) {
  return request
    .delete(`${rootUrl}/${id}`)
    .set('authorization', `Bearer ${token}`)
    .send()
    .then(res => res.body)
}
