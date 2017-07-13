const express = require('express')
const app = express()
const db  = require('./db')
const router = express.Router()
const path = require('path')
const bugs = require('./controllers/bugsController')

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})

app.use('/bugs', bugs.getBugs)

const port = 4000

app.listen(port)
console.log("Listening on port", port)