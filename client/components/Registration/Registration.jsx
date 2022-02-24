import React from 'react'
import { Navigate } from 'react-router-dom'
import addUser from './registerationApi'
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
    const navigate = Navigate()

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            gardenId: null
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
                        <label htmlFor='firstName' className='label'>First Name</label>
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
                        />
                        <label htmlFor='petType' className='label'>Type of Pet</label>
                        {showAnyErrors('petType')}
                        <select
                            className='form-box'
                            name='petType'
                            id='petType'
                            onChange={formik.handleChange}
                        >
                            <option hidden>Select from this list</option>
                            <option value={1}>Dog</option>
                            <option value={2}>Cat</option>
                            <option value={3}>No Pet...</option>
                        </select>
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
