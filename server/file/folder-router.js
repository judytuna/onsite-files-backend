'use strict'

const router = require('express').Router()  // eslint-disable-line new-cap

router.post('/', require('./handler/create-folder'))
router.get('/', require('./handler/find'))
router.get('/:id/items', require('./handler/folder-items'))

module.exports = router