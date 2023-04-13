const db = require('../connection');

const getCategoryList = () => {
  return db.query(`SELECT * FROM categories;`)
    .then(data => {
      console.log('CATEGORY LIST:', data.rows)
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message)
    })
};

module.exports = { getCategoryList };
