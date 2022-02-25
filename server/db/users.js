const connection = require('./connection')

function getUsers(db = connection) {
  return db('users')
    .select('id',
      'auth0_id as auth0Id',
      'name',
      'email',
      'location',
      'description')
}

function addUser(input, db = connection) {
  const { auth0Id, name, email, location, description } = input
  const user = { auth0_id: auth0Id, name, email, location, description }
  return db('users')
    .insert(user)
}

module.exports = {
  getUsers,
  addUser
}
