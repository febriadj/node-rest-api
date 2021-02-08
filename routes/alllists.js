"use strict"

const router = require('express').Router()
const db = require('../models/db')

router.get('/', (req, res, next) => {
  res.json({ message: 'All List Anime' })
})

module.exports = router