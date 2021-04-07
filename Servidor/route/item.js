const express = require('express')
const ItemService = require('../service/item.js')
const router = express.Router()

router.get('/items/:id', ItemService.getByID)
router.get('/items', ItemService.search)

module.exports = router