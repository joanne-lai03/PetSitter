import React from 'react'
import ContactSupport from './ContactSupport'

export default function Helpdesk () {
  function handleOnclick () {
    return (
      <ContactSupport />
    )
  }

  return (
    <section className='helpdesk-Screen'>

      <h1 className='helpdesk-title'><img className='helpdesk-logo' src='/images/logo_petsitter_maincolor.png' alt='logoimg' />Helpdesk</h1>
      <div className='helpdesk-main'>
        <i className='fa-solid fa-magnifying-glass'></i>
        <input type="text" />

      </div>
      <button onClick={handleOnclick} className='common-button helpdesk-button'>Do you need to contact support?</button>
    </section>
  )
}
