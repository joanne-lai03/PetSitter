import React from 'react'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { deleteListingFromList } from '../actions/petsitterListing'

function ListingsItem (props) {
  const listing = props.listing
  console.log(listing)
  const { id } = props.listing

  // const dispatch = useDispatch()

  function deleteFromList () {
    props.deleteFromList(id)
  }

  return (
    <>
      <div className="lists-all">
        <div className="lists-left">
          <img src="/images/sample.png" />
        </div>
        <ul className="lists-right">
          <li>
            <h3><i className="fa-solid fa-user"></i>{listing.name}</h3>
            <ul className="lists-ul-item">
              <li><i className="fa-solid fa-house"></i>{listing.pet_type}</li>
              <li><i className="fa-solid fa-house"></i>{listing.location}</li>
              <li><i className="fa-solid fa-money-check-dollar"></i>{listing.service_rate}</li>
              <li><i className="fa-solid fa-clock"></i>{listing.availability}</li>
              <li><i className="fa-solid fa-dog"></i>{listing.pet_size}</li>
              <li><i className="fa-solid fa-hand-holding-heart"></i>{listing.promo_listing}</li>
            </ul>
            <Link to={`/petsitters/profiles/${listing.id}`} className="button-orange button-checkprofile">Check profile</Link>
          </li>
        </ul>

        {/* Delete botton */}
        <a onClick={deleteFromList}><i className="fa-solid fa-trash-alt fa-size"></i></a>
        {/* Edit botton */}
        <a ><i className="fa-solid fa-pen-to-square fa-size"></i></a>
      </div>
    </>
  )
}

export default ListingsItem
