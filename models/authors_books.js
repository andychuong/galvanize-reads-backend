const authorsModel = require('../models/authors')
const booksModel = require('../models/books')
const knex = require('../db/knex')

const model = {
    getAuthors(bookId) {
        return knex('authors_books')
            .select('*')
            .where('book_id', bookId)
            .then(authorIds => {
                console.log('authorIds', authorIds)
                return Promise.all(authorIds.map(id => {
                    return authorsModel.getOneAuthor(id)
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
