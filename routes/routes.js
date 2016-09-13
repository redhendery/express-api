const express = require('express')
const router = express.Router()

// GET Home Page
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Kitchen Findr'})
});

router.get('/about', (req, res) => {
  res.render('about')
});

router.get('/contact', (req, res) => {
  res.render('contact')
});

module.exports = router;
