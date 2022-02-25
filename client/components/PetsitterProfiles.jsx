import React from 'react'
// import { addPetSitter } from '../apis/petSitters'
// import { useNavigate } from 'react-router-dom'

// 🎈🎈Have to build or check API connection!!

export default function PetSittingRegister () {
  // const navigate = useNavigate()

  async function handleClick () {
    console.log('test')
    event.preventDefault()
  }
  return (
    <div>
      <h2>Pet sitter form</h2>
      <p>Fill out the form below to create a listing</p>
      <form className='form'>
        <p> Name:</p>
        <input name="name" placeholder="Steve Puce"/>
        <p> Location:</p>
        <input location="location" placeholder="Hobsonville"/>
        <p> Amount of pets I can look after at one time:</p>
        <input petnumber="petnumber" placeholder="50"/>
        <p> Pet Type:</p>
        <input pettype="pettype" placeholder="guinea pigs and rabbits"/>
        <p> Pet sizes:</p>
        <input petsize="petsize" placeholder="small"/>
        <p> Home Type:</p>
        <input homesize="hometype" placeholder="castle"/>
        <p> Service and Rates:</p>
        <select id="services" name="services">
          <option value="pet sitting">Pet Sitting - $15 per hour</option>
          <option value="pet boarding">Pet Boarding - $40 per day</option>
          <option value="pet grooming">Pet Grooming - discuss with pet sitter</option>
          <option value="pet walking">Pet Walking - $10 per hour</option>
        </select>
        <p> Description: <a title="Write a few sentences about who you are to attract potential clients!"><img src="https://i.ibb.co/smSqZXF/Screen-Shot-2022-02-25-at-3-02-05-PM.png" height="14px"/></a>
        </p>
        <input description="description" placeholder="I live on a lifestyle block. I have lots of grass and spare space for guinea pigs and"/>
        <p> Promotion listing: <a title="Text will show up on the listings page"><img src="https://i.ibb.co/smSqZXF/Screen-Shot-2022-02-25-at-3-02-05-PM.png" height="14px"/></a>
        </p>
        <input promo="promo" placeholder="If you want someone to look after your guinea pig and rabbit, I'm your man!"/>

        <p><button type="submit" className='nav-register' onClick={handleClick} >Submit</button></p>
      </form>
    </div>
  )
}
