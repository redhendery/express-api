const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

// View engine set
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// Google Maps
const googleMapsClient = require('@google/maps').createClient({
  key: 'your API key here'
});

app.get('./views', (req, res) => {
  res.render('index.hbs')
});

module.exports = app
