const { Client } = require('pg');
const db = process.env.NODE_ENV === 'test' ? 'hike_test' : 'hike_finder';
const DATABASE_URL = process.env.DATABASE_URL;

// const client = new Client({
//   connectionString: `postgresql://localhost:5432/${db}`,
// });
let connection = process.env.DATABASE_URL || `postgresql://localhost:5432/${db}`;

const client = new Client({
  connectionString: connection,
});

client.connect();

module.exports = client;