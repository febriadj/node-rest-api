"use strict"
const router = require('express').Router()
const db = require('../models/db')

router.route('/')
  .get((req, res, next) => {
    let sql = `SELECT * FROM listAnime LEFT JOIN descAnime ON listAnime.id = descAnime.idList`
    db.query(sql, (err, result) => {
      if (err) return res.json({ message: err })
      
      res.json({ list: result })
    })
  })
  .post((req, res, next) => {
    let uri = req.query.add

    if ( uri == undefined ) res.json({ message: 'Invalid Query' })

    if ( uri == 'list-anime' ) {
      const { author, title, genre, status, rating } = req.body
      let sql = `INSERT INTO listAnime VALUES ( 0, '${author}', '${title}', '${genre}', '${status}', '${rating}' )`

      db.query(sql, (err, result) => {
        if (err) return res.json({ message: err })

        res.json({ message: 'Successfully Added Data'})
        next()
      })
    }

    if ( uri == 'desc-anime' ) {
      const { description, idlist } = req.body
      let sql = `INSERT INTO descAnime VALUES ( '${description}', ${idlist} )`

      db.query(sql, (err, result) => {
        if (err) return res.json({ message: err })

        res.json({ message: 'Successfully Added Data' })
        next()
      })
    }
  })
  .put((req, res, next) => {
    let uri = req.query.update
    let uriId = req.query.id
    let uriIdList = req.query.idlist

    if ( uri == undefined ) res.json({ message: 'Invalid Query' })

    if ( uri == 'list-anime' && uriId ) {
      const { author, title, genre, status, rating } = req.body
      let sql = `UPDATE listAnime SET author = ?, title = ?, genre = ?, status = ?, rating = ? WHERE id = ?`
      
      db.query(sql, [author, title, genre, status, rating, uriId], (err, result) => {
        if (err) return res.json({ message: err })

        res.json({ message: 'Successfully Update Data' })
        next()
      })
    }
    
    if ( uri == 'desc-anime' && uriIdList ) {
      const { description } = req.body
      let sql = `UPDATE descAnime SET description = '${description}', idList = ${uriIdList}`

      db.query(sql, (err, result) => {
        if (err) return res.json({ message: err })

        res.json({ message: 'Successfully Update Data' })
        next()
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
      next()
    })
  })

module.exports = router