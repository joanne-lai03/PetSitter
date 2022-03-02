import React from 'react'
import ButtonMailto from '../actions/mailto'

export function ListingProfilesItem (props) {
  // console.log(props.listingProfile)
  const listingProfiles = props.listingProfile

  return (
    <>
      <div className='profile-flex-container'>
        <div className="mainprofile-left">
          <img className='profile-picture' src="/images/sample.png" alt="Profile image"></img>
        </div>

        <div className='mainprofile-right'>
          <h3 className='name'>Name: {listingProfiles.name}</h3>
          <ul>
            <li className='location'><i className="fa-solid fa-location-dot"></i>Location:  {listingProfiles.location}</li>
            <li className='pet_number'>< i className="fa-solid fa-paw"></i>Number of Pets:  {listingProfiles.pet_number}</li>
            <li className='pet_type'><i className="fa-solid fa-bone"></i>Type of Pet:  {listingProfiles.pet_type}</li>
            <li className='pet_size'><i className="fa-solid fa-poo"></i>Size of Pet:  {listingProfiles.pet_size}</li>
            <li className='home_type'><i className="fa-solid fa-house"></i>Type of Home:  {listingProfiles.home_type}</li>
          </ul>
          <ButtonMailto label= {`Contact ${listingProfiles.name}`} mailto={`mailto:${listingProfiles.name}@gmail.com`}></ButtonMailto>
        </div>
      </div>

      <div className="inu-box-a">
        <div className="dog">・ᴥ・</div>
        <h3>About {listingProfiles.name}</h3>
        <p className='description'>Description: {listingProfiles.description}</p>
      </div>

      <div className="profile-container">
        <h3>Service & Availability</h3>
        <p className='service_rate'><i className="fa-solid fa-money-check-dollar"></i>Service rate: {listingProfiles.service_rate}</p>
        <p className='availability'><i className="fa-solid fa-clock"></i>Availability: {listingProfiles.availability}</p>
      </div>

      <div className="profile-container">
        <h3>Neighbourhood</h3>
        <p>Dog Walking service is located in the Domain.</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.3127991400597!2d174.77329701560475!3d-36.85893097993654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d480af001a981%3A0xf00ef62249cc2f0!2sAuckland%20Domain!5e0!3m2!1sen!2snz!4v1646032461299!5m2!1sen!2snz" width="800" height="600" loading="lazy"></iframe>
        {/* //         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102127.87557951237!2d174.77658575!3d-36.87847824999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d480af001a981%3A0xf00ef62249cc2f0!2sAuckland%20Domain!5e0!3m2!1sen!2snz!4v1645757427495!5m2!1sen!2snz" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"></iframe> */}
      </div>
    </>
  )
}
