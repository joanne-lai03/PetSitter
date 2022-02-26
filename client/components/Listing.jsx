import { Link } from 'react-router-dom'
import ListingItem from './ListingItem'
import React, { useEffect, useState } from 'react'
import { getListing } from '../apis/listing'
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

  // << this is for service search bar >>
  function selectService () {
    console.log('hello')
  }
  // << this is for location search bar >>
  const [filterTxt, setfilterTxt] = useState('')

  function searchBar (text) {
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
              <button onClick={selectService} className="lisiting-button-item">Pet Sitting </button>
              <button className="lisiting-button-item">Pet Boarding</button>
              <button className="lisiting-button-item">Pet Grooming</button>
              <button className="lisiting-button-item">Pet Walking</button>
            </div>
            <div>
              <p>My pet type</p>
              <select name="pet" className ="select-pet">
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
              </select>
            </div>
            <div>
              <p>Near me in</p>
              <input onChange={(event) => searchBar(event.target.value)} id='searchValue' type="search" className="searchbar" placeholder='Input your area' name='searchValue' />
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
        ? listings.map((listing) => {
          return <>
            <ListingItem listing={listing}/>
          </>
        })
        : listings
          .filter(listing => listing.location.toLowerCase().includes(filterTxt.toLowerCase()))
          .map((listing) => {
            return <>
              <ListingItem listing={listing}/>
            </>
          })
      }
    </>

  )
}

export default Listing
