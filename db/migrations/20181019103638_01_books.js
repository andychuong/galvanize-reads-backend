
exports.up = function (knex, Promise) {
    knex.schema.createTable('books', table => {
        table.increments()
        table.string('title').notNullable()
        table.string('genre').notNullable()
        table.string('description').notNullable()
        table.string('coverUrl').notNullable()
        table.timestamps(true, true).notNullable()
    })
}

exports.down = function (knex, Promise) {
    knex.schema.dropTable('books')
}
