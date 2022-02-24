const express = require('express')
const router = express.Router()

const db = require('../db/pettsitters')

module.exports = router

// Get listings for petsitters
router.get('/', (req, res) => {
  console.log('This is my get route for petsitters')
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

})