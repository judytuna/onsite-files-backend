'use strict'

const model = require('../mongo/model')

module.exports = data => {
	return model
		.create(data)
		.call('toObject')
}