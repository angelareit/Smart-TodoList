const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  console.log('got home');
  res.render('home');
});

module.exports = router;
