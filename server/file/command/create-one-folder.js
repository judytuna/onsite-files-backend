'use strict'

const model = require('../mongo/model')

module.exports = (folder, query) => {
	// turn file into the data we need
    let fileData = {}
    fileData.name = folder.name
    fileData.parentId = query.parentId || query.projectId
    fileData.projectId = query.projectId
    fileData.size = 0 // it always starts with nothing in it
    fileData.type = 'FOLDER' 

    console.log('About to save folder to db:', fileData.name)

	return model
		.create(fileData)
		.call('toObject')
}