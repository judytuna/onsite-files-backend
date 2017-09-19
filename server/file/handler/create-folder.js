'use strict'

const createOneFolder = require('../command/create-one-folder')
const findById = require('../query/find-by-id')

module.exports = (req, res, next) => {
	console.log(req.body)
	createOneFolder(req.body, req.query)
		.then(createdFile => findById(createdFile._id))
		.then(file => res.json(file))
		.catch(next)
}