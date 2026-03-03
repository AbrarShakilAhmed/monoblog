const express = require('express')
const postRouter = express.Router()
const path = require('path')
const viewsPath = require('../Utils/viewsPath')
const fs = require('fs')
const { getDB } = require('../Utils/databaseUtil')

postRouter.get('/post', (req, res) => {
  res.render('post')
})

const totalBlog = []
postRouter.use(express.urlencoded())
postRouter.post('/post', (req, res) => {
  const db = getDB()

  const { title, post } = req.body

  if (!title || !post) {
    return res.send(`
      <script>
        alert('Please enter valid data')
        location = '/post'
      </script>
    `)
  }
  db.collection('post')
    .insertOne({ title, post })
    .then(() => {
      console.log('post added')
    })

  res.redirect('/')
})

exports.postRouter = postRouter
exports.totalBlog = totalBlog
