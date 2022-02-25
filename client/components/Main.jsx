import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { getRegisterFn } from '../auth0-utils'

export default function Main () {
  return (

<<<<<<< HEAD
    <section className='main'>
      <div className="main-box">
        <div className="main-comment">
          <span>Are you looking for pet sitter?</span><br />
          <span>or</span><br />
          <span>Would you like to becom pet sitter?</span><br />
        </div>
||||||| 9fd4c82
    return (
=======
    const register = getRegisterFn(useAuth0)

    function handleRegister(event) {
        event.preventDefault()
        register()
    }

    return (
>>>>>>> c4df54a26f79d1554342f00909b212c20e040edf

        <a href='/' className='nav-register'>Resister Now !</a>
        <a href='/' className='nav-register'>Find a pet sitter</a>
        {/* have to change Link!!! */}
      </div>
    </section>

<<<<<<< HEAD
  )
||||||| 9fd4c82
                <a href='/' className='nav-register'>Resister Now !</a>
                <a href='/' className='nav-register'>Find a pet sitter</a>
                {/* have to change Link!!! */}
            </div>
        </section>

    )
=======
                <Link to='/register' className='nav-register' >Resister Now !</Link>
                {/* it needs to change for same Link as Nav Button */}
                {/* if you want to test remove "onClick={handleRegister}" parts */}
                <Link to='/' className='nav-register'>Find a pet sitter</Link>
                {/* have to change Link!!! */}
            </div>
        </section>

    )
>>>>>>> c4df54a26f79d1554342f00909b212c20e040edf
}
