'use strict'

const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	dateModified: {
		type: Date,
		default: Date.now
	},
	name: {
		required: true,
		type: String
	},
	parentId: {
		required: true,
		type: mongoose.Schema.Types.ObjectId
	},
	projectId: {
		required: true,
		type: mongoose.Schema.Types.ObjectId
	},
	size: {
		required: true,
		type: Number
	}, 
	type: {
		required: true,
		type: String
	}

})

module.exports = mongoose.model('File', schema)