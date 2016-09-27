const express = require('express')
const router = express.Router()

// GET Home Page
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Kitchen Findr'})
});

// GET About Page
router.get('/about', (req, res) => {
  res.render('about')
});

// GET Contact Page
router.get('/contact', (req, res) => {
  res.render('contact')
});

module.exports = router;
