import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function Helpdesk () {
  const [state, handleSubmit] = useForm('mayvjned')
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }

  return (
    <section className='helpdesk-Screen'>

      <h1 className='helpdesk-title'><img className='helpdesk-logo' src='/images/logo_petsitter_maincolor.png' alt='logoimg' />Helpdesk</h1>
      <div className='helpdesk-main'>
        <i className='fa-solid fa-magnifying-glass'></i>
        <input type="text" />

        <form onSubmit={handleSubmit} className='flex-myaccountContainer'>
          <label htmlFor='name'><i className="fa-solid icon_deco fa-user"></i>Name</label>
          <input
            type='text'
            name='name'
            id='full-name'
            placeholder='name' />
          <ValidationError
            prefix='name'
            field='name'
            errors={state.errors}
          />
          <label htmlFor='email'>
        Email Address
          </label>
          <input
            id='email'
            type='email'
            name='email'
          />
          <ValidationError
            prefix='Email'
            field='email'
            errors={state.errors}
          />
          <label htmlFor='help'>What we can help?</label>
          <select name='help' id='help' required=''>
            <option value="-1">--- Select Service ---</option>
            <option value="Pet Sitting">Pet Sitting</option>
            <option value="Pet Walking">Pet Walking</option>
            <option value="Pet Boarding">Pet Boarding</option>
            <option value="Pet Grooming">Pet Walking</option>
            <option value="account profile">Account \ Profiles</option>
            <option value="payment">Payments</option>
            <option value="feedback">Genaral Feedback \ Suggestions</option>
          </select>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
          <button type='submit' disabled={state.submitting}>
        Submit
          </button>
        </form>

      </div>
    </section>
  )
}
