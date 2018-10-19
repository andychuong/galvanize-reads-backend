const express = require('express')
const router = express.Router()
const controller = require('../controllers/books')

router.get('/', controller.getAll)
router.get('/:id', controller.verifyId, controller.getOne)
router.post('/', controller.create)
router.put('/:id', controller.verifyId, controller.update)
router.delete('/:id', controller.verifyId, controller.delete)

module.exports = router
