const express = require('express')
const homeRouter = require('./Routes/homeRouter')
const blogRouter = require('./Routes/blogRouter')
const { postRouter } = require('./Routes/postRouter')
const { totalBlog } = require('./Routes/postRouter')
const errorRouter = require('./Routes/errorRouter')
const app = express()
const path = require('path')

const { mongoConnect } = require('./Utils/databaseUtil')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/', (req, res, next) => {
  console.log(req.url)
  next()
})

app.use(express.static(path.join(__dirname, 'public')))

app.use(homeRouter)
app.use(blogRouter)
app.use(postRouter)
app.use(errorRouter)

const PORT = 3000
mongoConnect(() => {
  app.listen(PORT, () => {
    console.log(`Server start on${PORT}`)
  })
})
