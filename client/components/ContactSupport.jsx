import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactSupport () {
  const [state, handleSubmit] = useForm('mayvjned')

  if (state.succeeded) {
    return (
      <p>Your request sent to our manegement team, <br/>
      we will reply soon, Thank you!</p>
    )
  }
  return (

    <section className='helpdesk-Screen'>

      <h1 className='helpdesk-title'>
        <img className='helpdesk-logo' src='/images/logo_petsitter_maincolor.png' alt='logoimg' />
        Contact Support</h1>

      <form onSubmit={handleSubmit} className='flex-myaccountContainer'>
        <label htmlFor='name'><i className="fa-solid icon_deco fa-user"></i>Name</label>
        <input
          className='form-box'
          type='text'
          name='name'
          id='full-name'
          placeholder='name' />
        <ValidationError
          prefix='name'
          field='name'
          errors={state.errors}
        />
        <label htmlFor='email'><i className="fa-solid icon_deco fa-envelope"></i>
      Email Address
        </label>
        <input
          id='email'
          type='email'
          name='email'
          className='form-box'
          placeholder='email address'
        />
        <ValidationError
          prefix='Email'
          field='email'
          errors={state.errors}
        />
        <label htmlFor='help'><i className="fa-solid icon_deco fa-circle-question"></i>What we can help?</label>
        <select className='helpdesk-dropdown' name='help' id='help' required=''>
          <option value="-1">--- Select Service ---</option>
          <option value="Pet Sitting">Pet Sitting</option>
          <option value="Pet Walking">Pet Walking</option>
          <option value="Pet Boarding">Pet Boarding</option>
          <option value="Pet Grooming">Pet Walking</option>
          <option value="account profile">Account \ Profiles</option>
          <option value="payment">Payments</option>
          <option value="feedback">Genaral Feedback \ Suggestions</option>
        </select>
        <label htmlFor='message'><i className="fa-solid icon_deco fa-message"></i>Message</label>
        <textarea
          className='form-textarea form-box'
          id='message'
          name='message'
        />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />

        <button type='submit' className='common-button ' disabled={state.submitting}>
      Submit
        </button>

      </form>

    </section>
  )
}
