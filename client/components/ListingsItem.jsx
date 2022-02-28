import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { deleteListingFromList } from '../actions/petsitterListing'

function ListingsItem (props) {
  const listing = props.listing
  // console.log(listing)
  const { id } = props.listing
  const auth0Id = useSelector(state => state.user.auth0Id)
  // const dispatch = useDispatch()

  function deleteFromList () {
    props.deleteFromList(id)
  }

  return (
    <>
      <div className="lists-all">
        <div className="lists-left">
          <img className="lists-profile-pic" src="/images/sample.png" />
        </div>
        <ul className="lists-right">
          <li>
            <h3>{listing.name}</h3>
            <ul className="lists-ul-item">
              <li><i className="fa-solid fa-location-dot"></i><span className="profile-span">Location:</span>  {listing.location}</li>
              <li><i className="fa-solid fa-bone"></i><span className="profile-span">Pet type:</span>  {listing.pet_type}</li>
              <li><i className="fa-solid fa-money-check-dollar"></i><span className="profile-span">Service rate:</span>  {listing.service_rate}</li>
              <li><i className="fa-solid fa-clock"></i><span className="profile-span">Availability:</span>  {listing.availability}</li>
              <li><i className="fa-solid fa-hand-holding-heart"></i><span className="profile-span">About me:</span>  {listing.promo_listing}</li>
            </ul>
            <Link to={`/petsitters/profiles/${listing.id}`} className="button-orange button-checkprofile">Check profile</Link>
          </li>
        </ul>

        {/* Delete botton */}
        {listing.auth0_id === auth0Id && <a onClick={deleteFromList}><i className="fa-solid fa-trash-alt fa-size"></i></a>}
        {/* Edit botton */}
        <a ><i className="fa-solid fa-pen-to-square fa-size"></i></a>
      </div>
    </>
  )
}

export default ListingsItem
