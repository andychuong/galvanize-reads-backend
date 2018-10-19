// Controllers
const model = require('../models/authors')

function addAuthor(req, res, next) {
  const result = model.addAuthor(req.body)
  if (result.errors) {
    return next({
      status: 400,
      message: `Could not create new author`,
      errors: result.errors
    })
  }
  res.status(201).json({
    data: result
  })
}

function getAll(req, res, next) {
  const data = model.getAllAuthors()
  res.status(200).json({
    data: data
  })
}

function getOneAuthor(req, res, next) {
  const data = model.getOneAuthor(req.params.id)
  if (data.error) {
    return next({
      status: 404,
      message: data.error
    })
  }
  res.status(200).json({
    data: data.author
  })
}

function updateAuthor(req, res, next) {
  const data = model.updateAuthor(req.params.id, req.body)
  if (data.error) {
    return next({
      status: data.error.status,
      message: data.error.message
    })
  }
  res.status(200).json({
    data: data.author
  })
}

function deleteAuthor(req, res, next) {
  const data = model.deleteAuthor(req.params.id)
  if (data.error) {
    return next({
      status: 404,
      message: data.error
    })
  }
  res.status(204).json({
    data: data.author
  })
}

module.exports = {
  addAuthor,
  getAll,
  getOneAuthor,
  updateAuthor,
  deleteAuthor
}
