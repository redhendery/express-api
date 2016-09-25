const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const file = require('file-system')
const fs = require('fs')

const routes = require('./routes/routes')

const app = express()

// View engine set
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes);

module.exports = app
