'use strict'

const model = require('../mongo/model')

module.exports = id => {
	return model
		.findOne({ _id: id })
		.lean()
		.exec()
}