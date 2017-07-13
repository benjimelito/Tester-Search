const express = require('express')
const router = express.Router()
const bugs = require('../controllers/bugsController')

router.get('/bugs', bugs.getBugs)

module.exports = router