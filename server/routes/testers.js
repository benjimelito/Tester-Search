const express = require('express')
const router = express.Router()
const testers = require('../controllers/testersController')

router.get('/testers', testers.findTesters)

module.exports = router