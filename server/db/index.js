'use strict';

const { Client } = require('pg');
const db = process.env.NODE_ENV === 'test' ? 'hike_test' : 'hike_finder'; //for running testing on test db

let connection = process.env.DATABASE_URL || `postgresql://localhost:5432/${db}`; //hosted heroku postgres db or local db

const client = new Client({
  connectionString: connection,
});

client.connect();

module.exports = client;