import React from 'react'

export default function MyAccount (props) {
  const { name, email, location, description } = props.user

  return (
    <section className='myaccount'>
      <h1>My Account</h1>
      <ul className='myaccount-list'>
        <li><i className="fa-solid icon_deco fa-user"></i><span>name :</span>{name}</li>
        <li><i className="fa-solid icon_deco fa-envelope"></i><span>email :</span>{email}</li>
        <li><i className="fa-solid icon_deco fa-location-dot"></i><span>location :</span>{location}</li>
        <li><i className="fa-solid icon_deco fa-kiwi-bird"></i><span>introduce</span><p className='descriptionP'> {description} </p></li>
      </ul>
      <div className="changeMyaccount">
        <a className='linkBtn'><i className="fa-solid fa-pen-to-square fa-size icon_deco "></i></a>
        <a className='linkBtn'><i className="fa-solid fa-trash-alt fa-size icon_deco "></i></a>
      </div>
    </section >
  )
}
