'use strict'

const s3 = require('./s3')

module.exports = key => {
	const params = {
		Bucket: 'coding-challenges',
		Key: key,
		Expires: 60,
	}
	return s3.getSignedUrl('getObject', params)
}