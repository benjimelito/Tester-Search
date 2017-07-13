const knex = require('knex')({
  client: 'postgresql',
  connection: {
    database: 'testersearch_node'
  }
})

exports.selectByDevice = (deviceId) => {
  return knex.select('*').from('tester_devices').whereIn('deviceId', deviceId)
}