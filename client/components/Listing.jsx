import React from 'react'
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
    </>

  )
}

export default Listing
