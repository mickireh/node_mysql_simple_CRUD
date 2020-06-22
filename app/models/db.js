const mysql = require('mysql');
const dbConfig = require('../config/db.config');

// Create db connection
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE
});

// Connect to the DB
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;