const express = require('express');
const mysql = require('mysql');

const app = express();

//Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodemysql'
});

// Connect
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('MySQL connected...')
});

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created');
    });
});

// create table
app.get('/createtableusers', (req, res) => {
    let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, user VARCHAR(255), email VARCHAR(255) UNIQUE, password VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Users table created');
    })
});


app.listen('3000', () => {
    console.log('Server running on port 3000');
});