import React from 'react'
import { Link } from 'react-router-dom'

// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { addToCart } from '../actions/cart'
// import { fetchProducts, createNewProduct } from '../actions/products'

// import ProductListItem from './ProductListItem'

function Listing () {
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
      <div className="lists-all">
        <div className="lists-left">
          <img src="/images/sample.png" alt=""/>
        </div>
        <div className="lists-right">
          <i className="fa-solid fa-user"></i>
          <h3>Prue</h3>
          <ul>
            <li>Parnell, Auckland 1010</li>
            <li>Accept Dog size: 1.0kg</li>
            <li>Weekday</li>
            <li>Caring Dog Lover</li>
          </ul>
          <Link to='/petsitters/profiles' className="button-orange button-checkprofile">Check profile</Link>
        </div>
      </div>

    </>

  )
}

export default Listing
