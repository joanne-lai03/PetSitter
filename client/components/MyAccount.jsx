import React from 'react'

export default function MyAccount(props) {
  const { name, email, location } = props.user

  return (
    <>
      <h1>User Account</h1>
      <ul className='list-primary'>
        <li>name : {name}</li>
        <li>email : {email}</li>
        <li>location :{location}</li>
      </ul>

    </>
  )
}
