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

  let listAnime = `CREATE TABLE IF NOT EXISTS listAnime (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(225) DEFAULT '-',
    title VARCHAR(225) NOT NULL,
    genre VARCHAR(225),
    status ENUM('Ongoing', 'Completed'),
    rating FLOAT(3,2) DEFAULT 0.00
  )`
  
  db.query(listAnime, (err, result) => {
    if (err) console.log(err)
  })

  let descAnime = `CREATE TABLE IF NOT EXISTS descAnime (
    description TEXT DEFAULT '-',
    idList INT,
    FOREIGN KEY (idList) REFERENCES listAnime(id)
  )`

  db.query(descAnime, (err, result) => {
    if (err) console.log(err)
  })
})

module.exports = db