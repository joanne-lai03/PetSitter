import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Nav from './Nav'
import Main from './Main'

import Registration from './Registration'
import { Routes, Route } from 'react-router-dom'


export default function App() {
  cacheUser(useAuth0)

  return (
    <>
      <div className='app'>
        <Nav />
        <Routes>
          {/* <Route path='/' element={<Nav />} /> */}
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Registration />} />
        </Routes>
      </div>
    </>
  )
}
