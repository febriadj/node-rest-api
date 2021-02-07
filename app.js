const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      db = require('./models/db'),
      port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.json({ message: 'Hello World' })
})

app.listen(port, () => console.log(`listening on port ${port}`))