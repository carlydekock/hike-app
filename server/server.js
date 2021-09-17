'use strict';

const app = require('./app.js');

require('dotenv').config();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
