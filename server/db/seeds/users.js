exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          auth0_id: 'auth0|61414f84d35ac900717bc280',
          name: 'kelmarna',
          email: 'kelmarna@email.nz',
          description: 'the awesome developer'
        },
        {
          id: 2,
          auth0_id: 'auth0|61414f84d35ac900717bc280',
          name: 'cattttttttt',
          email: 'cheeeessssseeeeee@email.nz',
          description: 'the awesome developereeeeessssssssssseeeeee'
        },
        {
          id: 3,
          auth0_id: 'auth0|61414f84d35ac900717bc280',
          name: 'Jinny',
          email: 'cheeeesssssasdfsdfasdfasdfasdeeeeee@email.nz',
          description: 'the awesome developereeeeessssssssssasdfasdfseeeeee'
        }
      ])
    })
}
