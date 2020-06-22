const express = require('express');
const bodyParser = require("body-parser");

const app = express();


// Connect
// db.connect((err) => {
//     if(err) {
//         throw err;
//     }
//     console.log('MySQL connected...')
// });

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

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome Port 3000." });
});

require("./app/routes/user.routes.js")(app);

app.listen('3000', () => {
    console.log('Server running on port 3000');
});