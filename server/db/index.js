const { Client } = require('pg');
const db = process.env.NODE_ENV === 'test' ? 'hike_test' : 'hike_finder';

const client = new Client({
  connectionString: `postgresql://localhost:5432/${db}`,
});

client.connect();

module.exports = client;