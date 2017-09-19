'use strict'

const createOne = require('../command/create-one')
const findById = require('../query/find-by-id')

module.exports = (req, res, next) => {
	console.log("****************")
	console.log("query")
	console.log(req.query)
	console.log("params")
	console.log(req.params)
	console.log("WWWWWWWWWWWWWWWW")
	createOne(req.file, req.query)
		.then(createdFile => findById(createdFile._id))
		.then(file => res.json(file))
		.catch(next)
}