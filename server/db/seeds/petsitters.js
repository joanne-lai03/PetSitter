
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('petsitters').del()
    .then(function () {
      // Inserts seed entries
      return knex('petsitters').insert([
        {
          id: 1, auth0_id: 'rowValue1',
          name: 'rowValue1',
          location: 'Auckland',
          pet_number: 2,
          pet_type: 'cat',
          pet_size: 'big',
          home_type: 'apartment',
          service_rate: 'allday',
          availability: 'yes',
          description: 'hellloooo',
          promo_listing: '????'
        },
        {
          id: 2,
          auth0_id: 'rowValue1',
          name: 'rowValue1',
          location: 'Auckland',
          pet_number: 2,
          pet_type: 'cat',
          pet_size: 'big',
          home_type: 'apartment',
          service_rate: 'allday',
          availability: 'yes',
          description: 'hellloooo',
          promo_listing: '????'
        },
        {
          id: 3,
          auth0_id: 'rowValue1',
          name: 'rowValue1',
          location: 'Auckland',
          pet_number: 2,
          pet_type: 'cat',
          pet_size: 'big',
          home_type: 'apartment',
          service_rate: 'allday',
          availability: 'yes',
          description: 'hellloooo',
          promo_listing: '????'
        }

      ]);
    });
};

