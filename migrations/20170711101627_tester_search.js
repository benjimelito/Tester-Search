
exports.up = function(knex, Promise) {


    return Promise.all([

        knex.schema.createTable('testers', function(table) {
            table.integer('testerId').primary()
            table.string('firstName')
            table.string('lastName')
            table.string('country')
            table.dateTime('lastLogin')
        }),

        knex.schema.createTable('devices', function(table){
            table.integer('deviceId').primary()
            table.string('description')
        }),

        knex.schema.createTable('bugs', function(table){
            table.integer('bugId').primary();
            table.integer('deviceId')
                 .references('deviceId')
                 .inTable('devices')
            table.integer('testerId')
                 .references('testerId')
                 .inTable('testers')
        }),

        knex.schema.createTable('testerDevices', function(table){
            table.integer('deviceId')
                 .references('deviceId')
                 .inTable('devices')
            table.integer('testerId')
                 .references('testerId')
                 .inTable('testers')
        })
    ])
}

exports.down = function(knex, Promise) {  
    return Promise.all([
        knex.schema.dropTable('testers'),
        knex.schema.dropTable('devices'),
        knex.schema.dropTable('bugs'),
        knex.schema.dropTable('testerDevices')
    ])
}
