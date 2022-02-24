import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {

    return (

        <section className='main'>
            <div className="main-box">
                <div className="main-comment">
                    <span>Are you looking for pet sitter?</span><br />
                    <span>or</span><br />
                    <span>Would you like to becom pet sitter?</span><br />
                </div>

                <Link to='/' className='nav-register'>Resister Now !</Link>
                <Link to='/' className='nav-register'>Find a pet sitter</Link>
                {/* have to change Link!!! */}
            </div>
        </section>

    )
}
