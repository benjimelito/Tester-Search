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
  } else {

  // If either just device, or both country and device
  // are specified
    Device.selectByDevice(req.query.device)
    .then((tester_devices) => {
      
      const testerIds = tester_devices.map((tester_device) => {
        return tester_device.testerId
      })

      Tester.getTestersById(testerIds)
      .then((testers) => {
        
        // If country is specified
        if(req.query.country){
          
          // If we have an array of countries
          if (Array.isArray(req.query.country)){
            let filteredTesters = testers.filter((tester) => {
              return req.query.country.indexOf(tester.country) !== -1
            })
            res.send(filteredTesters)

          // If we just have one country  
          } else {
            let filteredTesters = testers.filter((tester) => {
              return tester.country = req.query.country
            })
            res.send(filteredTesters)
          }
        
        // If country is not specified
        } else {
          res.send(testers)
        }
      })
    })
  }
}