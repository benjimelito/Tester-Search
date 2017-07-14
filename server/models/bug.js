const knex = require('knex')({
  client: 'postgresql',
  connection: {
    database: 'testersearch_node'
  }
})

exports.selectByTester = (testerIdArray) => {
  return knex.select('*').from('bugs').whereIn('testerId', testerIdArray)
}