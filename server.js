const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
