"use strict"
const { json } = require('body-parser')
const db = require('../models/db')

module.exports = (req, res, next) => {
  let uriTitle = req.query.title
  let uriGenre = req.query.genre
  let uriRating = req.query.rating

  if ( uriTitle ) {
    let sql = `SELECT * FROM listAnime LEFT JOIN descAnime ON listAnime.id = descAnime.idList WHERE title LIKE '%${uriTitle}%'`

    db.query(sql, (err, result) => {
      if (err) return res.json({ message: err })

      res.json({ list: result })
    })
  }

  if ( uriGenre ) {
    let sql = `SELECT * FROM listAnime LEFT JOIN descAnime ON listAnime.id = descAnime.idList`
    db.query(sql, (err, result) => {
      if (err) return res.json({ message: err })
      
      result.map( list => {
        const genreList = list.genre.split(", ")

        for ( let i in genreList ) {
          if ( genreList[i].toLowerCase() == uriGenre ) {
            res.json({ list: list })
          }
        }
      })
    })
  }

  if ( uriRating ) {
    let sql = `SELECT * FROM listAnime WHERE rating < ${uriRating}`

    db.query(sql, (err, result) => {
      if (err) return res.json({ message: err })

      res.json({ list: result })
    })
  }

  if ( uriTitle == undefined && uriGenre == undefined && uriRating == undefined ) {
    let sql = `SELECT * FROM listAnime LEFT JOIN descAnime ON listAnime.id = descAnime.idList ORDER BY listAnime.title ASC`
    db.query(sql, (err, result) => {
      if (err) return res.json({ message: err })

      res.json({ list: result })
    })
  }
}