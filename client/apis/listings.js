import request from 'superagent'

// router.get in petsitters
export function getListing() {
  return request
    .get('api/v1/petsitters')
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
export function postListing (listing) {
  const newListing = {
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
    .post('/api/v1/petsitters')
    .send(newListing)
    .then(res => res.body)
}

// dlelet listing
export function deleteListing (id) {
  return request
    .delete('/api/v1/petsitters')
    .send({ id })
    .then(res => res.body)
}
