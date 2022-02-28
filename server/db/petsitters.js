const connection = require('./connection')

module.exports = {
  listPetsitters,
  addListing,
  deleteListing
}

function listPetsitters (db = connection) {
  return db('petsitters')
    .select()
}

function addListing (listing, db = connection) {
  const { id, auth0Id, name, location, petNumber, petType, petSize, homeType, serviceRate, availability, description, promoListing } = listing
  const newListing = {
    id,
    auth0_id: auth0Id,
    name,
    location,
    pet_number: petNumber,
    pet_type: petType,
    pet_size: petSize,
    home_type: homeType,
    service_rate: serviceRate,
    availability,
    description,
    promo_listing: promoListing
  }
  return db('petsitters')
    .insert(newListing)
}

function deleteListing (id, auth0Id, db = connection) {
  return db('petsitters')
    .where('id', id)
    .first()
    .then(listing => authorizeUpdate(listing, auth0Id))
    .then(() => {
      return db('petsitters')
        .where('id', id)
        .delete()
    })
}

function authorizeUpdate (listing, auth0Id) {
  if (listing.auth0_id !== auth0Id) {
    throw new Error('Unauthorized')
  }
}
