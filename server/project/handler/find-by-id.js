'use strict'

const findById = require('../query/find-by-id')

module.exports = (req, res, next) => {
	findById(req.params.id)
		.then(project => res.json(project))
		.catch(next)
}