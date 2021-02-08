"use strict"
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// middleware route from ./routes
app.use(require('./routes/index'))

app.listen(port, () => console.log(`listening on port ${port}`))