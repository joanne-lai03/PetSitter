const express = require('express')
const router = express.Router()

const db = require('../db/petsitters')

module.exports = router

// Get listings for petsitters
router.get('/', (req, res) => {
  db.listPetsitters()
    .then((petsitters) => {
      res.json(petsitters)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// Add new petsitters lising
router.post('/', (req, res) => {
  const { location, petSize, availability, promoListing } = req.body
  const listingData = { location, petSize, availability, promoListing }
  db.addListing(listingData)
    .then((result) => {
      res.json(result)
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Failed to add listing' })
    })
})

// Delete a single petsitters listing
router.delete('/', (req, res) => {
  const { id } = req.body
  db.deleteListing(id)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})
