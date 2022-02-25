import { Link } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchListing } from '../actions/listing'
// import { request } from 'express'
import request from 'superagent'

// import ProductListItem from './ProductListItem'

// const initial = [{
//   id: 1,
//   name: 'Claire',
//   location: 'Auckland',
//   pet_size: 'small',
//   availability: 'All day weekends',
//   promo_listing: 'Cat owner who is happy to look after other cats'
// },
// {
//   id: 2,
//   name: 'Claire',
//   location: 'Auckland',
//   pet_size: 'small',
//   availability: 'All day weekends',
//   promo_listing: 'Cat owner who is happy to look after other cats'
// }]

function Listing (props) {
  const { children, history } = props

  // const listings = useSelector(state => state.listing)
  // console.log('listings', listings)

  const dispatch = useDispatch()

  // const [listing, setListing] = useState(
  //   {
  //     name: '',
  //     location: '',
  //     availability: '',
  //     pet_size: '',
  //     promo_listing: ''
  //   }
  // )

  // useEffect(() => {
  //   dispatch(fetchListing())
  // }, [])

  const [listings, setListings] = useState([])

  useEffect(() => {
    request
      .get('api/v1/petsitters')
      .then(res => {
        console.log(res.body)
        setListings(res.body)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <div className="listing-image">
        <img src="/images/listing-top.jpeg" alt=""/>
        <div className ="listing-top">
          <div>
            <p>I am looking for</p>
            <div className="listing-button">
              <button className="lisiting-button-item">Dog boarding</button>
              <button className="lisiting-button-item">Dog boarding</button>
              <button className="lisiting-button-item">Dog boarding</button>
              <button className="lisiting-button-item">Dog boarding</button>
            </div>
            <div>
              <p>Near me in</p>
              <input id='searchValue' type="search" className="searchbar" placeholder='Search location...' name='searchValue' />
            </div>
          </div>
        </div>
      </div>
      <div className="linkto-add-profile">
        <h3>Would you like to be a pet sitter?</h3>
        <p>Please click here to post your profile!</p>
        <Link to='/petsitters/add' className="button-linktoaddprofile">Add to listing</Link>
      </div>
      {/* display all lists */}
      <p>Scroll down to browse Pet Sitters for Boarding and Sitting near you💗</p>

      {listings.map((item) => {
        return <>
          <div className="lists-all">
            <div className="lists-left">
              <img src="/images/sample.png" />
            </div>
            <ul className="lists-right">
              <li>
                <h3><i className="fa-solid fa-user"></i>{item.name}</h3>
                <ul className="lists-ul-item">
                  <li><i className="fa-solid fa-house"></i>{item.location}</li>
                  <li><i className="fa-solid fa-clock"></i>{item.availability}</li>
                  <li><i className="fa-solid fa-dog"></i>{item.pet_size}</li>
                  <li><i className="fa-solid fa-hand-holding-heart"></i>{item.promo_listing}</li>
                </ul>
                <Link to='/petsitters/profiles' className="button-orange button-checkprofile">Check profile</Link>
              </li>
            </ul>
          </div>
        </>
      })}

    </>

  )
}

export default Listing
