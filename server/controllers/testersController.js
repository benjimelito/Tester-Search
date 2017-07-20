const Tester = require('../models/tester')
const Device = require('../models/device')
const Bug = require('../models/bug')

exports.findTesters = (req, res, next) => {
  
  const sortTesters = function(testers){
    // Turn our array of all tester data into
    // an array of just IDs
    const testerIdArray = testers.map(tester => tester.testerId)

    Bug.selectByTesters(testerIdArray)
    .then((bugsArray) => {
      // Create an object to associate tester Ids
      // with number of bugs
      const bugsPerTester = {}

      // Filter the bugsArray to only match devices that were specified
      const filteredBugsArray = bugsArray.filter(bug =>
        req.query.device.map(Number).indexOf(bug.deviceId) !== -1)

      // Fill up the bugsPerTester object with a count of how many bugs each tester has
      filteredBugsArray.forEach((bug) => {
        bugsPerTester[bug.testerId]? bugsPerTester[bug.testerId] ++ : bugsPerTester[bug.testerId] = 1
      })

      // Create an array that holds each tester object, with
      // an additional property of 'bugs'. Then sort this array
      // by # of bugs
      const testersWithBugs = testers.map((tester) =>{
        tester.bugs = bugsPerTester[tester.testerId]
        return tester
      }).sort((a,b) => {
        return b.bugs - a.bugs
      })
      // Send em
      console.log(testersWithBugs)
      return res.send(testersWithBugs)
    })

  }

  // If neither country nor device is specified
  if(!req.query.country && !req.query.device) {
    Tester.getAllTesters()
    .then((testers) => {
      sortTesters(testers)
    })
  }

  // If country is specified, but not device
  if(!req.query.device && req.query.country) {
    Tester.getTestersByCountry(req.query.country)
    .then((testers) => {
      sortTesters(testers)
    })
  } else {

  // If either just device, or both country and device
  // are specified
    Device.selectByDevice(req.query.device)
    .then((tester_devices) => {
      // Create an array of tester Ids that match the given device(s)
      const testerIds = tester_devices.map(tester_device => tester_device.testerId)

      Tester.getTestersById(testerIds)
      .then((testers) => {
        
        // If country is specified
        if(req.query.country){
          
          // If we have an array of countries
          if (Array.isArray(req.query.country)){
            let filteredTesters = testers.filter((tester) => {
              return req.query.country.indexOf(tester.country) !== -1
            })
            sortTesters(filteredTesters)

          // If we just have one country  
          } else {
            let filteredTesters = testers.filter((tester) => {
              return tester.country === req.query.country
              //&& 
            })
            sortTesters(filteredTesters)
          }
        
        // If country is not specified
        } else {
          sortTesters(testers)
        }
      })
    })
  }
}