const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const index = require('./routes/index')
const bugs = require('./routes/bugs')
const testers = require('./routes/testers')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use(bugs)
app.use(testers)

// 404 Catcher
app.use((req, res, next) => {
  let err = new Error(`404: ${req.originalUrl} Not Found`);
  err.status = 404;
})

const port = 4000

app.listen(port)
console.log("Listening on port", port)