const authorsModel = require('../models/authors')
const booksModel = require('../models/books')
const knex = require('../db/knex')

const model = {
    getAuthors(bookId) {
        return knex('authors_books')
            .select('author_id')
            .where('book_id', bookId)
            .then(authorIds => {
                return Promise.all(authorIds.map(record => {
                    return authorsModel.getOneAuthor(record["author_id"])
                }))
            })
            .then(authors => {
                return booksModel.getOne(bookId)
                    .then(book => {
                        book.authors = authors
                        return book
                    })
            })
    },
    create(entry) {
        return authorsModel.getOneAuthor(entry.author_id)
            .then(() => knex('authors_books')
                .insert(entry))
            .catch(e => Promise.reject(e))
    },
    delete(bookId) {
        return knex('authors_books')
            .where('book_id', bookId)
            .del()
            .returning('*')
            .then(entries => entries)
            .catch(() => Promise.reject(e))
    }
}

module.exports = model
