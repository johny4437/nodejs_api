const {Client} = require('pg');
const db = require('./connection');

function dropTables(){
    db.connect();
    db.query(' DROP TABLE users');
    db.end()

    console.log('dbs dropped..')
}

dropTables();
