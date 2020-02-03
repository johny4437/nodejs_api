const {Client} = require('pg');
const db = require('./connection');



 function createTables(){
     db.connect();
     db.query(`
    CREATE EXTENSION IF NOT EXISTS pgcrypto;
    CREATE TABLE users(
        id serial PRIMARY KEY,
        name  VARCHAR(250) UNIQUE NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(250) UNIQUE NOT NULL,
        created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`);

         db.end()

        console.log('TABLES CREATED SUCESSFULLY..');
}

createTables();
