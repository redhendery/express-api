const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')

const routes = require('./routes')

const app = express()

// View engine set
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', routes)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))


// Load Kitchen data as JSON
fs.readFile(__dirname + '/data.JSON', 'utf8', loadKitchens);

function loadKitchens (err, data) {
  if(err) throw err

  const kitchenObj = JSON.parse(data)
  kitchens = kitchenObj
}

module.exports = app;
