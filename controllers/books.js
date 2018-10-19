const model = require('../models/books')
const joinModel = require('../models/authors_books')
module.exports = {
    // GET ALL
    getAll(req, res, next) {
        return model.getAll()
            .then(books => {
                return Promise.all(books.map(book => {
                    return joinModel.getAuthors(book.id)
                }))
            })
            .then(joinedBooks => res.status(200).json(joinedBooks))
            .catch(err => {
                const error = new Error('Failed to get books')
                error.status = 503
                error.caught = err
                return next(error)
            })
    },
    // GET ONE
    getOne(req, res, next) {
        return joinModel.getAuthors(+req.params.id)
            .then(book => res.status(200).json(book))
            .catch(err => {
                const error = new Error('Failed to get book')
                error.status = 404
                error.caught = err
                return next(error)
            })

    },
    // CREATE
    create(req, res, next) {
        return model.create(req.body)
            .then(book => {
                const inserts = req.body.authors.map(author => {
                    return { author_id: author.id, book_id: book.id }
                })
                Promise.all(inserts.map(entry => {
                    joinModel.create(entry)
                }))
                    .then(() => {
                        book.authors = req.body.authors
                        res.status(201).json(book)
                    })
                    .catch(err => {
                        const error = new Error('Failed to associate book with author')
                        error.status = 503
                        error.caught = err
                        return next(error)
                    })
            })
            .catch(err => {
                const error = new Error('Failed to create book')
                error.status = 503
                error.caught = err
                return next(error)
            })
    },
    // UPDATE
    update(req, res, next) {
        return model.update(+req.params.id, req.body)
            .then(book => {
                if (req.body.authors) {
                    req.book = book
                    return joinModel.delete(book.id)
                } else {
                    return res.status(200).json(book)
                }
            })
            .then(() => {
                return Promise.all(req.body.authors.map(author => {
                    return joinModel.create({ author_id: author.id, book_id: req.book.id })
                }))
            })
            .then(() => {
                book.authors = req.body.authors
                return res.status(201).json(book)
            })
            .catch(err => {
                const error = new Error('Failed to update book')
                error.status = 503
                error.caught = err
                return next(error)
            })
    },
    // DELETE
    delete(req, res, next) {
        return model.delete(+req.params.id)
            .then(book => res.status(200).json(book))
            .catch(err => {
                const error = new Error('Failed to delete book')
                error.status = 503
                error.caught = err
                return next(error)
            })
    },
}
