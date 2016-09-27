const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const routes = require('./routes')
const kitchens = require('./data')

const app = express()

// View engine set
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)

console.log(kitchens)

module.exports = app;
