const connection = require('./connection')

module.exports = {
  listPetSitters
}

function listPetSitters(db = connection) {
  return db('petsitters')
    .select()
}