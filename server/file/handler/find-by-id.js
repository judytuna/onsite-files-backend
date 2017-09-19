'use strict'

const findById = require('../query/find-by-id')
const getSignedS3DownloadUrl = require('../../lib/get-signed-s3-download-url')

module.exports = (req, res, next) => {
	//redirect to s3 filepath
	findById(req.params.id)
		.then(file => getSignedS3DownloadUrl(file.s3Key))
		.then(url => res.redirect(url))
		.catch(next)
}