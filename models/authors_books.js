const authorsModel = require('../models/authors')
const booksModel = require('../models/books')
const knex = require('../db/knex')

const model = {
    getAuthors(bookId) {
        return knex('authors_books')
            .select('author_id')
            .where('book_id', bookId)
            .then(authorIds => {
                console.log('authorIds', authorIds)
                return Promise.all(authorIds.map(record => {
                    return authorsModel.getOneAuthor(record["author_id"])
                }))
            })
            .then(authors => {
                console.log('authors', authors)
                return booksModel.getOne(bookId)
                    .then(book => {
                        book.authors = authors
                        return book
                    })
            })
    }
}

module.exports = model
