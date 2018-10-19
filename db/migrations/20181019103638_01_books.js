
exports.up = function (knex, Promise) {
    return knex.schema.createTable('books', table => {
        table.increments()
        table.string('title').notNullable()
        table.string('genre').notNullable()
        table.string('description').notNullable()
        table.string('coverUrl').notNullable()
        table.timestamps(true, true).notNullable()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('books')
}
