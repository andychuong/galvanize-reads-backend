// Routes
const express = require('express')
const router = express.Router()
const control = require('../controllers/authors')

router.get('/', control.addAll)
router.get('/:id', control.getOneAuthor)
router.post('/', control.createAuthor)
router.put('/:id', control.updateAuthor)
router.delete('/:id', control.deleteAuthor)

module.exports = router
