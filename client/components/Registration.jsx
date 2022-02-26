import React from 'react'
import { useNavigate } from 'react-router-dom'
import addUser from '../apis/registerationApi'
import { useAuth0 } from '@auth0/auth0-react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'This must be at least 2 characters long')
    .max(15, 'Sorry, this must be under 15 characters long')
    .required('Sorry it\'s Required')
  // email: Yup.string().email(),
})

export default function Register() {
  // const user = useSelector(state => state.user)
  const authUser = useAuth0().user
  const navigate = useNavigate()

  // 🎃🎃🎃 We need to think about input Email instead Auth0.user.email data....

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      location: '',
      description: ''
    },
    onSubmit: values => {
      addUser(values, authUser, navigate)
    },
    validationSchema: registerSchema
  })

  function showAnyErrors(inputName) {
    return formik.errors[inputName] && formik.touched[inputName]
      ? <p className='inputError'>{formik.errors[inputName]}</p>
      : null
  }

  return (
    <>
      <h2>Register Profile</h2>
      <section className='flex-container centre-flex'>
        <form onSubmit={formik.handleSubmit}>
          <div className="field">

            <label htmlFor='name' className='label'>Name</label>
            {showAnyErrors('name')}
            <input
              className='form-box'
              id='name'
              name='name'
              placeholder='Please write your Name...'
              onChange={formik.handleChange}
              value={formik.values.name}
            />

            <label htmlFor='location' className='label'>Your Location</label>
            {showAnyErrors('location')}
            <input
              className='form-box'
              id='location'
              name='location'
              onChange={formik.handleChange}
              value={formik.values.location}
            />

            <label htmlFor='description' className='label'>About yourself</label>
            {showAnyErrors('description')}
            <textarea
              className='form-box'
              id='description'
              name='description'
              onChange={formik.handleChange}
              value={formik.values.description}
            />

          </div>

          <button
            className='submit profile-submit'
            type='submit'
          >Register</button>

        </form>
      </section>
    </>
  )
}
