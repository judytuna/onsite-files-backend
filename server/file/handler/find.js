'use strict'

const find = require('../query/find')

module.exports = (req, res, next) => {
	find({projectId: req.query.projectId})
		.then(files => res.json(files))
		.catch(next)
}