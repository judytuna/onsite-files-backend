'use strict'

const model = require('../mongo/model')

module.exports = (file, query) => {
	// turn file into the data we need
    let fileData = {}
    fileData.name = file.originalname
    fileData.parentId = query.parentId || query.projectId
    fileData.projectId = query.projectId
    fileData.size = file.size
    fileData.type = 'FILE'
    fileData.s3Key = file.key

	return model
		.create(fileData)
		.call('toObject')
}