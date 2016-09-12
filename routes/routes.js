const express = require('express')
const router = express.Router()

// GET Home Page
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Kitchen Findr'})
})

module.exports = router;
