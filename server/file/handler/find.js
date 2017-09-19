'use strict'

const find = require('../query/find')

module.exports = (req, res, next) => {
	find()
		.then(files => res.json(files))
		.catch(next)
}