'use strict'

const createOneFolder = require('../command/create-one-folder')
const findById = require('../query/find-by-id')

module.exports = (req, res, next) => {
	createOneFolder(req.body, req.query)
		.then(createdFile => findById(createdFile._id))
		.then(file => res.json(file))
		.catch(next)
}