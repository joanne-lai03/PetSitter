import React, { useState } from 'react'
import { postListing } from '../apis/listings'
import { useNavigate } from 'react-router-dom'

export default function PetSitterForm () {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    id: '',
    name: '',
    location: '',
    petNumber: '',
    petType: '',
    petSize: '',
    homeType: '',
    serviceRate: '-1',
    availability: '',
    description: '',
    promoListing: ''
  })

  function handleChange (event) {
    setForm(
      {
        ...form,
        [event.target.name]: event.target.value
      })
  }

  function handleSubmit (event) {
    event.preventDefault()


    postListing(form)
      .then(() => {
        navigate(`/petsitters/profiles/${form.id}`)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <div>
      <h2>Pet sitter form</h2>
      <p>Fill out the form below to create a listing</p>
      <form className='form'>
        <p> Name:</p>
        <input name="name" onChange={handleChange} value={form.name} placeholder="Steve Puce" />

        <p> Location:</p>
        <input name="location" onChange={handleChange} value={form.location} placeholder="Hobsonville" />

        <p> Amount of pets I can look after at one time:</p>
        <input name="petNumber" onChange={handleChange} placeholder="50"/>

        <p> Pet Type:</p>
        <input name="petType" onChange={handleChange} placeholder="guinea pigs and rabbits"/>

        <p> Pet sizes:</p>
        <input name="petSize" onChange={handleChange} placeholder="small"/>

        <p> Home Type:</p>
        <input name="homeType" onChange={handleChange} placeholder="castle"/>

        <p> Availability: <a title="Write down the days you think you'll be available. This can be further discussed when the client makes an inquiry"><img src="https://i.ibb.co/smSqZXF/Screen-Shot-2022-02-25-at-3-02-05-PM.png" height="14px"/></a></p>
        <input name="availability" onChange={handleChange} placeholder="all day errrdaay!"/>

        <p> Service and Rates:</p>
        <select id="serviceRate" name="serviceRate" onChange={handleChange} value={form.services}>
          <option value="-1">--- Select Service ---</option>
          <option name="serviceRate1">Pet Sitting - $15 per hour</option>
          <option name="serviceRate2">Pet Boarding - $40 per day</option>
          <option name="serviceRate3">Pet Grooming - discuss with pet sitter</option>
          <option name="serviceRate4">Pet Walking - $10 per hour</option>
        </select>

        <p> Description: <a title="Write a few sentences about who you are to attract potential clients!"><img src="https://i.ibb.co/smSqZXF/Screen-Shot-2022-02-25-at-3-02-05-PM.png" height="14px"/></a></p>
        <input name="description" onChange={handleChange} placeholder="I live on a lifestyle block. I have lots of grass and spare space for guinea pigs and"/>

        <p> Promotion listing: <a title="A sentence or two to grab your potential client's attention! This text that will show up in on the listings page"><img src="https://i.ibb.co/smSqZXF/Screen-Shot-2022-02-25-at-3-02-05-PM.png" height="14px"/></a></p>
        <input name="promoListing" onChange={handleChange} placeholder="If you want someone to look after your furbaby, I'm your man!"/>

        <p><button type="submit" className='nav-register' onClick={handleSubmit} >Submit</button></p>
      </form>
    </div>
  )
}
