const express = require('express')
const errorRouter = express.Router()
const path = require('path')
const viewsPath = require('../Utils/viewsPath')

errorRouter.use((req, res) => {
  res.status(404).render('404')
})

module.exports = errorRouter
