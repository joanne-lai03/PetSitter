import React from 'react'
import { useSelector } from 'react-redux'
import { MyAccount } from './MyAccount'
import Registeration from './Registration'

export default function Login() {
  const user = useSelector(state => state.user)
  console.log('From Login components', user)
  return (
    <div>
      {
        user.name
          ? (<MyAccount user={user} />)
          : (<Registeration user={user} />)
      }
    </div>
  )
}
