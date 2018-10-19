exports.up = function (knex, Promise) {
    return knex.schema.createTable('authors_books', table => {
        table.integer('author_id').notNullable()
        table.integer('book_id').notNullable()
        table.foreign('author_id').onDelete('CASCADE').references('authors.id')
        table.foreign('book_id').onDelete('CASCADE').references('books.id')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('authors_books')
}