'use strict'

const router = require('express').Router()  // eslint-disable-line new-cap
const multer = require('multer')
const multerS3 = require('multer-s3')
const s3 = require('../lib/s3')

const uploader = multer({
	storage: multerS3({
		s3,
		bucket: 'coding-challenges',
		key: (req, file, cb) => {
			const projectId = req.query.projectId
			return cb(null, `/projects/${projectId}/${Date.now()}/${file.originalname}`)
		},
	}),
})

// This should upload the file, however, you'll still need to add another function after this
// uploader middleware to actually save a record of this file in Mongo
router.post('/', uploader.single('file'))

module.exports = router