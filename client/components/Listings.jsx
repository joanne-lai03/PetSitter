import { Link } from 'react-router-dom'
import ListingsItem from './ListingsItem'
import React, { useEffect, useState } from 'react'
import { getListing } from '../apis/listings'
import { useDispatch } from 'react-redux'
import { deleteListingFromList } from '../actions/listings'
// import { fetchListing } from '../actions/listing'

function PetsitterListing () {
  const dispatch = useDispatch()

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

  function deleteFromList (id) {
    dispatch(deleteListingFromList(id))
    getListing()
      .then(apiResponse => {
        setListings(apiResponse)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }

  // << this is for select service and pet type >>
  const [selectPet, setSelectPet] = useState('')

  function setSelectPetBar (value) {
    console.log(value)
    setSelectPet(value)
    console.log('hey', selectPet)
  }

  // << this is for location search bar >>
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  function handleChange (event) {
    const searchTerm = event.target.value
    console.log('handleChange', searchTerm)
    setSearch(searchTerm)
  }

  function handleSubmit (event) {
    event.preventDefault()
    console.log('handle submit')
    getListing(search)
      .then(listings => {
        setResults(listings)
        return null
      })
  }

  return (
    <>
      <div className="listing-image">
        <img src="/images/listing-top.jpeg" alt="" />
        <div className="listing-top">
          <div>
            <p>I am looking for</p>
            <div className="listing-button">
              <select onChange={event => setSelectPetBar(event.target.value)} name="service" className ="select-pet">
                <option>--- Select Service ---</option>
                <option value="$20/day">Pet Sitting</option>
                <option value="$30/day">Pet Boarding</option>
                <option value="$40/day">Pet Grooming</option>
                <option value="$50/day">Pet Walking</option>
              </select>
            </div>
            <div>
              <p>My pet type</p>
              <select onChange={event => setSelectPetBar(event.target.value)} name="pet" className ="select-pet">
                <option>--- Select Pet Type ---</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
            </div>
            <div>
              <p>Near me in</p>
              <div className="wrap">
                <div className="searchbar-button">
                  <input onChange={handleChange} value={search} type="text" id='searchValue' className="searchbar" placeholder='Input your area' name='searchValue'></input>
                  <button onClick={(event) => submitButton()}type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
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

      {/* search function : select service or pet type */}
      { selectPet
        ? listings
          .filter(pet => pet.pet_type === selectPet || pet.service_rate === selectPet)
          .map((listing) => {
            return <>
              <ListingsItem listing={listing} deleteFromList={deleteFromList}/>
            </>
          })
        : listings
          .map((listing) => {
            return <>
              <ListingsItem listing={listing} deleteFromList={deleteFromList}/>
            </>
          })
      }

      {/* search function : location */}
      {search.length === 0
        ? listings.map((listing) => {
          return <>
            <ListingsItem listing={listing} deleteFromList={deleteFromList} />
          </>
        })
        : listings
          .filter(listing => listing.location.toLowerCase().includes(filterTxt.toLowerCase()))
          .map((listing) => {
            return <>
              <ListingsItem listing={listing} deleteFromList={deleteFromList} />
            </>
          })
      }
    </>

  )
}

export default PetsitterListing
