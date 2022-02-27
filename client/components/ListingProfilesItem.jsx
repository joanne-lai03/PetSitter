import React from 'react'
  
  export function ListingProfilesItem (props) {
  // console.log(props.listingProfile)
  const listingProfiles = props.listingProfile

  return (
    <div className='listing-profile'>
      <p className='name'>{listingProfiles.name}</p>
      <p className='location'>{listingProfiles.location}</p>
      <p className='pet_number'>{listingProfiles.pet_number}</p>
      <p className='pet_type'>{listingProfiles.pet_type}</p>
      <p className='pet_size'>{listingProfiles.pet_size}</p>
      <p className='home_type'>{listingProfiles.home_type}</p>
      <p className='service_rate'>{listingProfiles.service_rate}</p>
      <p className='availability'>{listingProfiles.availability}</p>
      <p className='description'>{listingProfiles.description}</p>
      <p className='promo_listing'>{listingProfiles.promo_listing}</p>
    </div>
  )
}

