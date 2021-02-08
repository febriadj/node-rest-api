const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(require('./routes/index'))

app.get('/', (req, res, next) => {
  res.json({ message: 'Hello World' })
})

app.listen(port, () => console.log(`listening on port ${port}`))