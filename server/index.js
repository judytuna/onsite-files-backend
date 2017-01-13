'use strict'

const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const P = require('bluebird')

// Have mongoose use bluebird as it's promise library per: http://mongoosejs.com/docs/promises.html
mongoose.Promise = P

const webpackConfig = require('../webpack.config')

const app = express()

// Parse JSON bodies
app.use(bodyParser.json())

// Set up the webpack dev server
app.use(webpackMiddleware(
	webpack(webpackConfig),
	{ publicPath: '/dist' }
))

// Set up static files
app.use(express.static('public'))

// Routes for primary API
app.use('/api/projects', require('./project/router'))
app.use('/api/files', require('./file/file-router'))

mongoose
	.connect('mongodb://localhost:27019/backend-challenge')
	.then(() => {
		app.listen(8080, () => {
			console.log('Server started') // eslint-disable-line no-console
		})
	})
	.catch(e => {
		console.error('Could not connect to mongo', e) // eslint-disable-line no-console
		process.exit()
	})
