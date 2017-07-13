const knex = require('knex')({
  client: 'postgresql',
  connection: {
    database: 'testersearch_node'
  }
})

exports.getAllTesters = () => {
  // Return all testers in db
  return knex('testers')
}

exports.getTestersByCountry = (country) => {
  // If the country param is an array, we perform one knex operation
  // If it is simply a string (one item), we do another
  console.log('Country: ', country)
  return Array.isArray(country)? knex.select('*').from('testers').whereIn('country', country) 
  : knex('testers').where('country', country)
}

exports.getTestersById = (id) => {
  console.log('ID: ', id)
  return knex.select('*').from('testers').whereIn('testerId', id) 
}