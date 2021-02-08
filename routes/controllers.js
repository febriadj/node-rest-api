"use strict"
const router = require('express').Router()
const db = require('../models/db')

router.route('/')
  .get(require('./search'))
  .post((req, res, next) => {
    let uri = req.query.add

    if ( uri == undefined ) res.json({ message: 'Invalid Query' })
    if ( uri == 'list-anime' ) {
      const { author, title, genre, status, rating } = req.body
      let sql = `INSERT INTO listAnime VALUES ( 0, '${author}', '${title}', '${genre}', '${status}', '${rating}' )`

      db.query(sql, (err, result) => {
        if (err) return res.json({ message: err })

        res.json({ message: 'Successfully Added Data'})
      })
    }

    if ( uri == 'desc-anime' ) {
      const { description, idlist } = req.body
      let sql = `INSERT INTO descAnime VALUES ( '${description}', ${idlist} )`

      db.query(sql, (err, result) => {
        if (err) return res.json({ message: err })

        res.json({ message: 'Successfully Added Data' })
      })
    }
  })
  .put((req, res, next) => {
    let uri = req.query.update

    if ( uri == undefined ) res.json({ message: 'Invalid Query' })
    if ( uri == 'list-anime' ) {
      const { author, title, genre, status, rating, id } = req.body
      let sql = `UPDATE listAnime SET author = ?, title = ?, genre = ?, status = ?, rating = ? WHERE id = ?`
      
      db.query(sql, [author, title, genre, status, rating, uriId, id], (err, result) => {
        if (err) return res.json({ message: err })

        res.json({ message: 'Successfully Update Data' })
      })
    }
    
    if ( uri == 'desc-anime' ) {
      const { description, idlist } = req.body
      let sql = `UPDATE descAnime SET description = '${description}', idList = ${idlist}`

      db.query(sql, (err, result) => {
        if (err) return res.json({ message: err })

        res.json({ message: 'Successfully Update Data' })
      })
    }
  })
  .delete((req, res, next) => {
    let uri = req.query.delete

    if ( uri == undefined ) return res.json({ message: err })
    let sql = `DELETE FROM listAnime WHERE id = ${uri}`
    db.query(sql, (err, result) => {
      if (err) return res.json({ message: err })

      res.json({ message: 'Successfully Delete Data'})
    })
  })

module.exports = router