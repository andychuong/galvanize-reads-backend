const model = require('../models/books')
module.exports = {
    // GET ALL
    getAll(req, res, next) {
        return model.getAll()
            .then(books => res.status(200).send({ data: books }))
            .catch(err => {
                const error = new Error('Failed to get books')
                error.status = 503
                error.caught = err
                return next(error)
            })
    },
    // GET ONE
    getOne(req, res, next) {
        return model.getOne(+req.params.id)
            .then(book => res.status(200).send({ data: book }))
            .catch(err => {
                const error = new Error('Failed to get book')
                error.status = 404
                error.caught = err
                return next(error)
            })

    },
    // CREATE
    create(req, res, next) {
        return model.create(+req.params.id)
            .then(book => res.status(201).send({ data: book }))
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
            .then(book => res.status(200).send({ data: book }))
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
            .then(book => res.status(200).send({ data: book }))
            .catch(err => {
                const error = new Error('Failed to delete book')
                error.status = 503
                error.caught = err
                return next(error)
            })
    },
    // // Helper Middleware
    // verifyId(req, res, next) {
    //     let { id } = +req.params.id
    //     if (!id || typeof id !== 'number') {
    //         const error = new Error('Bad ID')
    //         error.status = 400
    //         return next(error)
    //     }
}
}
