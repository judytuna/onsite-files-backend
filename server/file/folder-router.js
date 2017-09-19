'use strict'

const router = require('express').Router()  // eslint-disable-line new-cap

router.post('/', (req, res, next) => {
	console.log('posted')
	next()}, 
require('./handler/create-folder'))
router.get('/', require('./handler/find'))
router.get('/:id/items', require('./handler/folder-items'))

module.exports = router