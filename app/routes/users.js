const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { validateCreate } = require('../validators/users')

const getItems = require('../controlles/users')
const getItem = require('../controlles/users')
const createItem = require('../controlles/users')
const deleteItem = require('../controlles/users')
const updateItem = require('../controlles/users')

router.get('/', getItems.getItems)
router.get('/:id', getItem.getItem)

//TODO: Donde recibimos data
router.post('/', checkOrigin, validateCreate, createItem.createItem)

router.patch('/:id', updateItem.updateItem)

router.delete('/:id', deleteItem.deleteItem)


module.exports = router