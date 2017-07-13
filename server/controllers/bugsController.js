const Bug = require('../models/bug')

exports.getBugs = function(req,res,next){
  console.log('in bugs')
  Bug.getAllBugs()
  .then(function(bugs){
    res.send(bugs)
  })
}