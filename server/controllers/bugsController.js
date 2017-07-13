const Bug = require('../models/bug')

exports.getBugs = (req, res, next) => {
  Bug.getAllBugs()
  .then(function(bugs){
    res.send(bugs)
  })
}