import React from 'react'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export default function Main () {
  const register = getRegisterFn(useAuth0)
  const user = useSelector(state => state.user)

  function handleRegister (event) {
    event.preventDefault()
    register()
  }

  return (

    <section className='main'>
      <img className="main-img" src="/images/homeimg.jpeg" alt="" />
      <div className="main-box">
        <div className="main-comment">
          <span>Are you looking for pet sitter?</span><br />
          <span>or</span><br />
          <span>Would you like to becom pet sitter?</span><br />
        </div>
        <div className='main-box-button'>
          <IfAuthenticated>
            {user.id === null
              ? <Link to='/myaccount' className='nav-register' onClick={handleRegister}>Resister Now !</Link>
              : <Link to='/petsitters' className='nav-register nav-petsitter'>Find a pet sitter</Link>
            }
          </IfAuthenticated>
          <IfNotAuthenticated>
            <Link to='/register' className='nav-register' onClick={handleRegister}>Resister Now !</Link>
            <Link to='/' className='nav-register'>Find a pet sitter</Link>
          </IfNotAuthenticated>
        </div>
      </div>
    </section>

  )
}
