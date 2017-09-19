'use strict'

const createOne = require('../command/create-one')
const findById = require('../query/find-by-id')

module.exports = (req, res, next) => {
	createOne(req.file, req.query)
		.then(createdFile => findById(createdFile._id))
		.then(file => res.json(file))
		.catch(next)
}