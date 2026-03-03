const express = require('express')
const homeRouter = express.Router()
const path = require('path')
const viewsPath = require('../Utils/viewsPath')

homeRouter.get('/', (req, res) => {
  res.render('home')
})

module.exports = homeRouter
