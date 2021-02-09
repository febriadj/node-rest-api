"use strict"
const db = require('../models/db')

module.exports = (req, res, next) => {
  let uriId = req.query.id
  let uriTitle = req.query.title
  let uriGenre = req.query.genre
  let uriRating = req.query.rating

  if ( uriId ) {
    let sql = `SELECT * FROM listAnime LEFT JOIN descAnime ON listAnime.id = descAnime.idList WHERE id = ?`

    db.query(sql, [uriId], (err, result) => {
      if (err) return res.json({ message: err })

      res.json({ list: result })
    })
  
  } else if ( uriTitle ) {
    let sql = `SELECT * FROM listAnime LEFT JOIN descAnime ON listAnime.id = descAnime.idList WHERE title LIKE '%${uriTitle}%'`

    db.query(sql, (err, result) => {
      if (err) return res.json({ message: err })

      res.json({ list: result })
    })

  } else if ( uriGenre ) {
    let sql = `SELECT * FROM listAnime LEFT JOIN descAnime ON listAnime.id = descAnime.idList`
    
    db.query(sql, (err, result) => {
      if (err) return res.json({ message: err })
      
      result.map( list => {
        const genreList = list.genre.split(", ")
        
        for ( let i in genreList ) {
          if ( genreList[i].toLowerCase() == uriGenre ) {
            console.log(list)
            res.end()
          }
        }
      })
    })

  } else if ( uriRating ) {
    let sql = `SELECT * FROM listAnime LEFT JOIN descAnime ON listAnime.id = descAnime.idlist WHERE rating <= ${uriRating}`

    db.query(sql, (err, result) => {
      if (err) return res.json({ message: err })

      res.json({ list: result })
    })
    
  } else {
    let sql = `SELECT * FROM listAnime LEFT JOIN descAnime ON listAnime.id = descAnime.idList ORDER BY listAnime.title ASC`
    
    db.query(sql, (err, result) => {
      if (err) return res.json({ message: err })

      res.json({ list: result })
    })
  }
}