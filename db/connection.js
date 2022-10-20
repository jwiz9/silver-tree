const mysql = require('mysql2');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    // Rename .env.EXAMPLE to .env and within that file update the DB_PASSWORD to equal your mysql password
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log('Connected to the silver_db database.')
);

module.exports = db.promise();