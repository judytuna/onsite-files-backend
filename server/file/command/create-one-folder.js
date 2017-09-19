'use strict'

const model = require('../mongo/model')

module.exports = (folder, query) => {
	// turn given folder information into the data we need
    let fileData = {}
    fileData.name = folder.name
    fileData.parentId = query.parentId || query.projectId
    fileData.projectId = query.projectId
    fileData.size = 0 // it always starts with nothing in it
    fileData.type = 'FOLDER' 

	return model
		.create(fileData)
		.call('toObject')
}