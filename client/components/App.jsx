import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import { Routes, Route } from 'react-router-dom'

// 🎈components linked
// import Registration from './Registration'
import Nav from './Nav'
import Main from './Main'
import PetsitterForm from './PetsitterForm'
import PetsitterProfiles from './ListingProfiles'
import Registration from './Registration'
import Listings from './Listings'

export default function App () {
  cacheUser(useAuth0)

  return (
    <>
      <div className='app'>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Registration />} />
          {/* <Route path='/profiles' element={<Profile />} /> */}
          {/* 🎈 if you build your Componets comments out! this and check it's working */}
          <Route path='/petsitters' element={<Listings />} />
          <Route path='/petsitters/add' element={<PetsitterForm />} />
          <Route path='/petsitters/profiles' element={<PetsitterProfiles />} />
        </Routes>
      </div>
    </>
  )
}
