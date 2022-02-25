exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('petsitters').del()
    .then(function () {
      // Inserts seed entries
      return knex('petsitters').insert([
        {
          id: 1,
          auth0_id: 'rowValue1',
          name: 'Claire',
          location: 'Auckland',
          pet_number: 2,
          pet_type: 'cat',
          pet_size: 'small',
          home_type: 'house',
          service_rate: '$20/day',
          availability: 'All day weekends',
          description: 'Hi, my name is Claire and I am a proud owner of two cats. I am located in the eastern suburbs etc',
          promo_listing: 'Cat owner who is happy to look after other cats'
        },

        {
          id: 2,
          auth0_id: 'rowValue1',
          name: 'Joanne',
          location: 'Auckland',
          pet_number: 1,
          pet_type: 'dog',
          pet_size: 'small to medium',
          home_type: 'house',
          service_rate: '$30/day',
          availability: 'Thursday - Sunday from 5pm',
          description: 'Dog lover who does not own her own pets but love looking after other dogs. Has plenty of experience looking after other dogs.',
          promo_listing: '????'
        },

        {
          id: 3,
          auth0_id: 'rowValue1',
          name: 'Jinny',
          location: 'Auckland',
          pet_number: 3,
          pet_type: 'cat',
          pet_size: 'small',
          home_type: 'granny flat',
          service_rate: '$40/day',
          availability: 'Monday - Friday from 5pm',
          description: 'Cat lover who is always happy to help take care of others cats',
          promo_listing: '????'
        },
        {
          id: 4,
          auth0_id: 'rowValue1',
          name: 'Hiro',
          location: 'Auckland',
          pet_number: 2,
          pet_type: 'cat',
          pet_size: 'small',
          home_type: 'apartment',
          service_rate: '$30/day',
          availability: 'Weekends after 3pm',
          description: 'Big fan of all pets and has previous experience owning a dog and a cat',
          promo_listing: '????'
        },
        {
          id: 5,
          auth0_id: 'rowValue1',
          name: 'Sadie',
          location: 'Auckland',
          pet_number: 1,
          pet_type: 'dog',
          pet_size: 'medium to large',
          home_type: 'house',
          service_rate: '$40/day',
          availability: 'Monday - Friday from 6pm',
          description: 'Love having a dog run around my big backyard. Hoping to own my own dog one day!',
          promo_listing: '????'
        },
        {
          id: 6,
          auth0_id: 'rowValue1',
          name: 'Ahmad',
          location: 'Auckland',
          pet_number: 5,
          pet_type: 'dog',
          pet_size: 'medium to large',
          home_type: 'house',
          service_rate: '$50/day',
          availability: 'Weekends from 5am - 8pm',
          description: 'I love dogs!!! Woohoo!',
          promo_listing: '????'
        },
        {
          id: 7,
          auth0_id: 'rowValue1',
          name: 'Prue',
          location: 'Auckland',
          pet_number: 1,
          pet_type: 'dog',
          pet_size: 'small to medium',
          home_type: 'house',
          service_rate: '$30/day',
          availability: 'Weekdays between 6pm - 9pm',
          description: 'Dogs are sick! Yeah, they\'re mean.',
          promo_listing: '????'
        },
        {
          id: 8,
          auth0_id: 'rowValue1',
          name: 'Jared',
          location: 'Auckland',
          pet_number: 3,
          pet_type: 'dog',
          pet_size: 'small to medium',
          home_type: 'house',
          service_rate: '$40/day',
          availability: 'All day, everday',
          description: 'I only look after dogs named Jerry',
          promo_listing: '????'
        },
        {
          id: 9,
          auth0_id: 'rowValue1',
          name: 'Eleanor',
          location: 'Auckland',
          pet_number: 1,
          pet_type: 'cat',
          pet_size: 'any size',
          home_type: 'flat',
          service_rate: '$20/day',
          availability: 'Weekends from 3pm',
          description: 'Love animals of all sizes. The bigger the better!',
          promo_listing: '????'
        }

      ])
    })
}
