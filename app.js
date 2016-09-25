const express = require('express')
const path = require('path')
const jsonfile = require('jsonfile')

const routes = require('./routes/routes')

const app = express()

// View engine set
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', routes);

const file = './data/data.json'
jsonfile.readFile(file, (err, obj) => {
  console.dir("This is the JSON obj: ", obj)
})

module.exports = app;
