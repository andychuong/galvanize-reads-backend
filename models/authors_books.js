const authorsModel = require('../models/authors')
const booksModel = require('../models/books')

const model = {
    getAuthors(bookId) {
        return knex('authors_books')
            .select('author_id')
            .where('book_id', bookId)
            .then(authorIds => {
                return Promise.all(authorIds.map(id => {
                    return authorsModel.getOneAuthor(id)
                }))
            })
            .then(authors => {
                return booksModel.getOne(bookId)
                    .then(book => {
                        book.authors = authors
                        return book
                    })
            })
    }
}

module.exports = model
