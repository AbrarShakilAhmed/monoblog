const express = require('express')
const blogRouter = express.Router()
const path = require('path')
const viewsPath = require('../Utils/viewsPath')
const rootPath = require('../Utils/rootPathRouter')
const { getDB } = require('../Utils/databaseUtil')

blogRouter.get('/blog', (req, res) => {
  res.render('blog')
})
blogRouter.get('/blog-data', (req, res) => {
  const db = getDB()
  db.collection('post')
    .find()
    .toArray()
    .then((data) => {
      res.json(data)
    })
})
module.exports = blogRouter
