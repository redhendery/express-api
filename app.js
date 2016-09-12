const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const routes = require('./routes/routes')

const app = express()

// View engine set
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes);

// Google Maps
const googleMapsClient = require('@google/maps').createClient({
  key: 'your API key here'
});

module.exports = app
