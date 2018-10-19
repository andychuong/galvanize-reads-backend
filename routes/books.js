const express = require('express')
const router = express.Router()
const controller = require('../controllers/books')

router.get('/', controller.getAll)
router.get('/:id', verifyId, controller.getOne)
router.post('/', controller.create)
router.put('/:id', verifyId, controller.update)
router.delete('/:id', verifyId, controller.delete)

module.exports = router