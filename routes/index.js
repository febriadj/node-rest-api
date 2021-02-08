"use strict"

const router = require('express').Router()
const db = require('../models/db')

router.get('/', (req, res, next) => {
  res.json({ message: 'Hello World' })
})

// route middleware
router.use('/list', require('./alllists'))

router.get('*', (req, res, next) => {
  res.status(404).json({ message: 'Page Not Found'})
})

module.exports = router