import { Link } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { getListing } from '../apis/listing'
// import { dispatch } from '../store'

// import { useDispatch, useSelector } from 'react-redux'
// import { fetchListing } from '../actions/listing'

function Listing (props) {
  // console.log('props?', props)

  // << Using redux >>
  // const listings = useSelector(state => state.listing)
  // console.log('listings', listings)

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchListing())
  // }, [])

  // << Using useState >>
  const [listings, setListings] = useState([])

  useEffect(() => {
    // dispatch()
    getListing()
      .then(apiResponse => {
        setListings(apiResponse)
        // dispatch(clearWaiting)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  // << this is for location serach bar >>
  const [filterTxt, setfilterTxt] = useState('')

  function searchBar (text) {
    console.log('hello~', text)
    setfilterTxt(text)
  }

  return (
    <>
      <div className="listing-image">
        <img src="/images/listing-top.jpeg" alt=""/>
        <div className ="listing-top">
          <div>
            <p>I am looking for</p>
            <div className="listing-button">
              <button className="lisiting-button-item">Pet Sitting </button>
              <button className="lisiting-button-item">Pet Boarding</button>
              <button className="lisiting-button-item">Pet Grooming</button>
              <button className="lisiting-button-item">Pet Walking</button>
            </div>
            <div>
              <p>Near me in</p>
              <input onChange={(event) => searchBar(event.target.value)} id='searchValue' type="search" className="searchbar" placeholder='Search location...' name='searchValue' />
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

      {filterTxt.length === 0
        ? listings.map((item) => {
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
                  <Link to={`/petsitters/profiles/${item.id}`} className="button-orange button-checkprofile">Check profile</Link>
                </li>
              </ul>
              <a><i className="fas fa-trash-alt fa-size"></i></a>
              <a><i className="fa-solid fa-pen-to-square fa-size"></i></a>
            </div>
          </>
        })
        : listings
          .filter(item => item.location.toLowerCase().includes(filterTxt.toLowerCase()))
          .map((item) => {
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
                    <Link to={`/petsitters/profiles/${item.id}`} className="button-orange button-checkprofile">Check profile</Link>
                  </li>
                </ul>
                <a><i className="fas fa-trash-alt fa-size"></i></a>
                <a><i className="fa-solid fa-pen-to-square fa-size"></i></a>
              </div>
            </>
          })

      }

    </>

  )
}

export default Listing
