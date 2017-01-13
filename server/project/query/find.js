'use strict'

const model = require('../mongo/model')

module.exports = query => {
	return model
		.find(query)
		.lean()
		.exec()
}