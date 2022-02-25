import React from 'react'
import { useNavigate } from 'react-router-dom'
import addUser from '../apis/registerationApi'
import { useAuth0 } from '@auth0/auth0-react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'This must be at least 2 characters long')
        .max(15, 'Sorry, this must be under 15 characters long')
        .required('Required'),
    lastName: Yup.string()
        .required('Required')
        .min(2, 'This must be at least 2 characters long')
        .max(20, 'Sorry, this must be under 20 characters long'),
    petType: Yup.number()
        .required('Required')
})

export default function Register() {
    // const user = useSelector(state => state.user)
    const authUser = useAuth0().user
    const navigate = useNavigate()

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
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        <label htmlFor='email' className='label'>Email</label>
                        {showAnyErrors('email')}
                        <input
                            className='form-box'
                            id='email'
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
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
                        <input
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



{/* <label htmlFor='firstName' className='label'>First Name</label>
{showAnyErrors('firstName')}
<input
    className='form-box'
    id='firstName'
    name='firstName'
    onChange={formik.handleChange}
    value={formik.values.firstName}
/>
<label htmlFor='lastName' className='label'>Last Name</label>
{showAnyErrors('lastName')}
<input
    className='form-box'
    id='lastName'
    name='lastName'
    onChange={formik.handleChange}
    value={formik.values.lastName}
/> */}