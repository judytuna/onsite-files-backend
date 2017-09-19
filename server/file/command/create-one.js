'use strict'

const model = require('../mongo/model')

module.exports = file => {
	// turn file into the data we need
/*	
FILE
{ fieldname: 'file',
  originalname: 'galaxy 2 1280px-M82_HST_ACS_2006-14-a-large_web.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  size: 229604,
  bucket: 'coding-challenges',
  key: '/projects/59c162715b0a8daffb1538f7/1505855111435/galaxy 2 1280px-M82_HST_ACS_2006-14-a-large_web.jpg',
  acl: 'private',
  contentType: 'application/octet-stream',
  contentDisposition: null,
  storageClass: 'STANDARD',
  serverSideEncryption: null,
  metadata: null,
  location: 'https://coding-challenges.s3.amazonaws.com//projects/59c162715b0a8daffb1538f7/1505855111435/galaxy%202%201280px-M82_HST_ACS_2006-14-a-large_web.jpg',
  etag: '"8a74fd6c37e4a44b488dee6483e606b9"' } 

QUERY
{ parentId: '', projectId: '59c162715b0a8daffb1538f7' }
  */

    let fileData = {}
    fileData.name = file.originalname
    // fileData.parentId = 

	return model
		.create(fileData)
		.catch(err => console.log())
		.call('toObject')
}