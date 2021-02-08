"use strict"
const db = require('../models/db')

module.exports = (req, res, next) => {
  let uri = req.query
  let uriTitle = req.query.title
  let uriGenre = req.query.genre

  if ( uri == undefined ) {
    let sql = `SELECT * FROM listAnime LEFT JOIN descAnime ON listAnime.id = descAnime.idList`
    db.query(sql, (err, result) => {
      if (err) return res.json({ message: err })

      res.json({ list: result })
      next()
    })
  }

  if (uriTitle) {
    let sql = `SELECT * FROM listAnime LEFT JOIN descAnime ON listAnime.id = descAnime.idList WHERE title LIKE '%${uriTitle}%'`

    db.query(sql, (err, result) => {
      if (err) return res.json({ message: err })

      res.json({ list: result })
      next()
    })
  }
}