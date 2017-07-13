const Tester = require('../models/tester')
const Device = require('../models/device')

exports.findTesters = (req, res, next) => {
  
  // If neither country nor device is specified
  if(!req.query.country && !req.query.device) {
    Tester.getAllTesters()
    .then((testers) => {
      res.send(testers)
    })
  }

  // If country is specified, but not device
  if(!req.query.device && req.query.country) {
    Tester.getTestersByCountry(req.query.country)
    .then((testers) => {
      res.send(testers)
    })
  }

// If device is specified, but not country
  if(!req.query.country && req.query.device) {
    Device.selectByDevice(req.query.device)
    .then((tester_devices) => {
      console.log('got these tester_devices: ', tester_devices)
      const testerIds = tester_devices.map((tester_device) => {
        return tester_device.testerId
      })

      console.log('mapped testerIds: ', testerIds)

      Tester.getTestersById(testerIds)
      .then((testers) => {
        res.send(testers)
      })
    })
  }
}