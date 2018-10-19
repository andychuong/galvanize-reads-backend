
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments()
        table.timestamps(true, true)
        table.string('userName').notNullable()
        table.string('password').notNullable()
        table.boolean('admin').notNullable()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users')
}