const knex = require('knex')({
  client: 'postgresql',
  connection: {
    database: 'testersearch_node'
  }
})

exports.getAllBugs = function(){
  return knex('bugs')
}