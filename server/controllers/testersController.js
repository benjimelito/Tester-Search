const Tester = require('../models/tester')

exports.findTesters = (req, res, next) => {
  let country = req.query.country
  let deviceID = req.query.deviceID

  
  res.sendStatus(200)
}