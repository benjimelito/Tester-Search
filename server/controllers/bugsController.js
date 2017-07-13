const Bug = require('../models/bug')

exports.getBugs = (req, res, next) => {
  Bug.getAllBugs()
  .then((bugs) => {
    res.send(bugs)
  })
}