'use strict'

const aws = require('aws-sdk')

module.exports = new aws.S3({
	accessKeyId: process.env.ACCESS_KEY_ID,
	secretAccessKey: process.env.SECRET_ACCESS_KEY,
})
