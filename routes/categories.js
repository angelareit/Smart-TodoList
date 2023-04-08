const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  console.log('categories');
  res.render('categories');
});

module.exports = router;
