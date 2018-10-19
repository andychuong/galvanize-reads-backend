// Routes
const express = require('express')
const router = express.Router()
const control = require('../controllers/authors')

router.get('/', control.getAll)
router.get('/:id', control.getOneAuthor)
router.post('/', control.addAuthor)
router.put('/:id', control.updateAuthor)
router.delete('/:id', control.deleteAuthor)

module.exports = router
