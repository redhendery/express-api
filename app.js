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

// Load data.JSON for use with HBS
var fileName = __dirname + '/data.json'

function getData(data, id) {
  for(i in data)
    if(data[i].id === Number(id))
      return data[i]
}

module.exports = app
