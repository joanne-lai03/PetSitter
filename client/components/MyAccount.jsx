import React from 'react'

export default function MyAccount (props) {
  const { name, email, location, description } = props.user

  return (
    <>
      <h1>My Account</h1>
      <ul className='myaccount-list'>
        <li><i className="fa-solid icon_deco fa-user"></i> name : {name}</li>
        <li><i className="fa-solid icon_deco fa-envelope"></i> email : {email}</li>
        <li><i className="fa-solid icon_deco fa-location-dot"></i>location :{location}</li>
        <li><i className="fa-solid icon_deco fa-kiwi-bird"></i>introduce : {description} </li>
      </ul>

    </>
  )
}
