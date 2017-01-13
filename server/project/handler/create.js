'use strict'

const createOne = require('../command/create-one')
const findById = require('../query/find-by-id')

module.exports = (req, res, next) => {
	createOne(req.body)
		.then(createdProject => findById(createdProject._id))
		.then(project => res.json(project))
		.catch(next)
}