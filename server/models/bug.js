const knex = require('knex')({
  client: 'postgresql',
  connection: {
    database: 'testersearch_node'
  }
})

exports.getAllBugs = () => {
  return knex('bugs')
}