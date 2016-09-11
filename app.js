var express = require('express')
var app = express()

var googleMapsClient = require('@google/maps').createClient({
  key: 'your API key here'
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
  console.log('App listening at http://localhost:3000/')
});
