import React, { useState, useEffect } from 'react'
import { updateListing } from '../apis/listings'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import updateListingById from '../actions/listings'

export default function ListingsItemEdit () {
  const dispatch = useDispatch
  const { id } = useParams()
  const { auth0Id, token } = useSelector(state => state.user)

  // const listing = listingArr.find(el => el.id === Number(id))

  const [editForm, setEditForm] = useState([]
    // {
    // auth0Id: auth0Id,
    // name: listing.name,
    // location: listing.location,
    // petNumber: listing.pet_number,
    // petType: listing.pet_type,
    // petSize: listing.pet_size,
    // homeType: listing.home_type,
    // serviceRate: listing.service_rate,
    // availability: listing.availability,
    // description: listing.description,
    // promoListing: listing.promo_listing
  // }
  )

  useEffect(() => {
    const action = updateListingById(id, token)
    dispatch(action)
  }, [])

  function handleChange (e) {

  }

  return (
    <div>
      <h1>Petsitter editing form</h1>
      <h5>Edit your listing below:</h5>
      <form className='form'>
        <p className='label'> Name:</p>
        <input name="name"
          onChange={handleChange}
          value={editForm.name} // need to update code so it takes user's name from account
          className='form-box'/>

        <p> Location:</p>
        <input name="location"
          onChange={handleChange}
          value={editForm.location} // need to update code so it takes user's location from account
          className='form-box'
        />

        <p> Amount of pets I can look after at one time:</p>
        <input name="petNumber"
          onChange={handleChange}
          value={editForm.petNumber}
          className='form-box'
        />

        <p> Pet Type:</p>
        <input name="petType"
          onChange={handleChange}
          value={editForm.petType}
          className='form-box'
        />

        <p> Pet sizes:</p>
        <input name="petSize"
          onChange={handleChange}
          value={editForm.petSize}
          className='form-box'
        />

        <p> Home Type:</p>
        <input name="homeType"
          onChange={handleChange}
          value={editForm.homeType}
          className='form-box'
        />

        <p> Availability: <a title="Write down the days you think you'll be available. This can be further discussed when the client makes an inquiry"><img src="https://i.ibb.co/smSqZXF/Screen-Shot-2022-02-25-at-3-02-05-PM.png" height="14px"/></a></p>
        <input name="availability"
          onChange={handleChange}
          value={editForm.availability}
          className='form-box'
        />

        <p> Service and Rates:</p>
        <select id="serviceRate"
          name="serviceRate"
          onChange={handleChange}
          className='form-box'
          value={editForm.serviceRate}>
          <option value="-1">--- Select Service ---</option>
          <option name="serviceRate1">Pet Sitting - $15 per hour</option>
          <option name="serviceRate2">Pet Boarding - $40 per day</option>
          <option name="serviceRate3">Pet Grooming - discuss with pet sitter</option>
          <option name="serviceRate4">Pet Walking - $10 per hour</option>
        </select>

        <p> Description: <a title="Write a few sentences about who you are to attract potential clients!"><img src="https://i.ibb.co/smSqZXF/Screen-Shot-2022-02-25-at-3-02-05-PM.png" height="14px"/></a></p>
        <textarea name="description"
          onChange={handleChange}
          value={editForm.description}
          className='form-box form-textarea form-font'
        />

        <p> Promotion listing: <a title="A sentence or two to grab your potential client's attention! This text that will show up in on the listings page"><img src="https://i.ibb.co/smSqZXF/Screen-Shot-2022-02-25-at-3-02-05-PM.png" height="14px"/></a></p>

        <textarea name="promoListing"
          onChange={handleChange}
          value={editForm.promoListing}
          className='form-box form-textarea form-font '
        />

        <p><button type="submit"
          className='nav-register'
          onClick={handleSubmit} >
          Submit</button></p>

      </form>
    </div>
  )
}
