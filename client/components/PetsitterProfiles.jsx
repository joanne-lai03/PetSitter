import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// 🎈🎈Have to build or check API connection!!

function pettSitterList (props) {
  const { x, x} = props
  const petSitter = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch()
  })
}

export default function PetsitterProfiles () {
  return (
    <div>
      <img src="server/public/homeimg.jpeg" alt="Profile image"></img>
      <h3>Prue</h3>
      <p>Parnell, Auckland 1010</p>
      <p>Accepted Dog size: 1kg</p>
      <p>Weekday: 9am ~ 5pm</p>
      <button className="buttons">Contact Prue</button>

      <div className="container">
        <h4>About Prue</h4>
        <p>Hi there! This is my description.</p>
      </div>

      <div className="container">
        <h4>Prue`s service</h4>
        <p>Dog walking</p>
      </div>

      <div>
        <h4>Neighbourhood</h4>
        <p>Dog Walking service is located in the Domain.</p>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102127.87557951237!2d174.77658575!3d-36.87847824999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d480af001a981%3A0xf00ef62249cc2f0!2sAuckland%20Domain!5e0!3m2!1sen!2snz!4v1645757427495!5m2!1sen!2snz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
      </div>

    </div>
  )
}
