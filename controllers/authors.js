// Controllers
const model = require('../models/authors')

function addAuthor(req, res, next) {
  return model.addAuthor(req.body)
    .catch(errors => {
      return next({
        status: 400,
        message: `Could not create new author`,
        errors: errors
      })
    })
    .then(data => {
      res.status(201).json({
        data: data
      })
    })
}

function getAll(req, res, next) {
  return model.getAll()
    .catch(error=>{
      console.log(error)
    })
    .then(data => {
      res.status(200).json({
        data: data
      })
    })
}

function getOneAuthor(req, res, next) {
  return model.getOneAuthor(req.params.id)
    .catch(error => {
      return next({
        status: 404,
        message: error
      })
    })
    .then(data => {
      res.status(200).json({
        data: data
      })
    })
}

function updateAuthor(req, res, next) {
  return model.updateAuthor(req.params.id, req.body)
    .then(author => res.status(200).send(author))
    .catch(err => {
      const error = new Error('Failed to update author')
      error.status = 503
      error.caught = err
      return next(error)
    })
}

function deleteAuthor(req, res, next) {
  return model.deleteAuthor(req.params.id)
    .then(author => res.status(200).send(author))
    .catch(err => {
      const error = new Error('Failed to delete author')
      error.status = 503
      error.caught = err
      return next(error)
    })
}

module.exports = {
  addAuthor,
  getAll,
  getOneAuthor,
  updateAuthor,
  deleteAuthor
}
