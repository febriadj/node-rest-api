const mysql = require('mysql'),
      dotenv = require('dotenv').config({ path: './.env'})

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
})

db.connect(err => {
  if (err) return console.log(err)
  console.log('db connected')

  db.query('CREATE DATABASE IF NOT EXISTS restapi', (err, result) => {
    if (err) return console.log(err)
  })
})

module.exports = db