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
  const { location, petSize, availability, promoListing } = listing
  const newListing = { location, pet_size: petSize, availability, promo_listing: promoListing }
  return db('petsitters')
    .insert(newListing)
}

function deleteListing (id, db = connection) {
  return db('petsitters')
    .where('id', id)
    .del()
}
