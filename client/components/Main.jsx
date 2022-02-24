import React from 'react'

export default function Main() {

    return (

        <section className='main'>
            <div className="main-box">
                <div className="main-comment">
                    <span>Are you looking for pet sitter?</span><br />
                    <span>or</span><br />
                    <span>Would you like to becom pet sitter?</span><br />
                </div>

                <a href='/' className='nav-register'>Resister Now !</a>
                <a href='/' className='nav-register'>Find a pet sitter</a>
                {/* have to change Link!!! */}
            </div>
        </section>

    )
}
