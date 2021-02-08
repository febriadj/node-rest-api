"use strict"
const router = require('express').Router()
const db = require('../models/db')

router.get('/', (req, res, next) => {
  res.json({ message: 'To show a list of anime, go to /api/list in the url address' })
})

// route middleware
router.use('/list', require('./controllers'))

router.use((req, res, next) => {
  res.status(404).json({ message: 'Page Not Found'})
})

module.exports = router