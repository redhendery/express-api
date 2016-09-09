var express = require('express')

var app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
  console.log('App listening at http://localhost:3000/')
});
