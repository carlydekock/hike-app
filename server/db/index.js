const { Pool } = require('pg');
//this is what will connect to postgres database - from the docs
const pool = new Pool();
module.exports = {
  query: (text, params) => pool.query(text, params),
};