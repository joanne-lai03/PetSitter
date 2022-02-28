import React from 'react'

export function ListingProfilesItem (props) {
  // console.log(props.listingProfile)
  const listingProfiles = props.listingProfile

  return (
    <div className='Listing-profile'>
      <div className='flex-container'>
        <div>
          <img className='profile-picture' src="/images/sample.png" alt="Profile image"></img>
        </div>

        <div className='main-comment'>
          <h4 className='name'>Name: {listingProfiles.name}</h4>
          <p className='location'>Location: {listingProfiles.location}</p>
          <p className='pet_number'>Number of Pet:{listingProfiles.pet_number}</p>
          <p className='pet_type'>Type of Pet:{listingProfiles.pet_type}</p>
          <p className='pet_size'>Size of Pet: {listingProfiles.pet_size}</p>
          <p className='home_type'>Type of Home: {listingProfiles.home_type}</p>
          <button className='nav-register'>Contact {listingProfiles.name}</button>
        </div>
      </div>

      <div className="container">
        <h4>About {listingProfiles.name}</h4>
        <p className='description'>Description: {listingProfiles.description}</p>
      </div>

      <div className="container">
        <p className='service_rate'>Service rate: {listingProfiles.service_rate}</p>
        <p className='availability'>Availability: {listingProfiles.availability}</p>
      </div>

      <div>
        <h4>Neighbourhood</h4>
        <p>Dog Walking service is located in the Domain.</p>
        {/* //         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102127.87557951237!2d174.77658575!3d-36.87847824999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d480af001a981%3A0xf00ef62249cc2f0!2sAuckland%20Domain!5e0!3m2!1sen!2snz!4v1645757427495!5m2!1sen!2snz" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"></iframe> */}
      </div>
    </div>
  )
}
