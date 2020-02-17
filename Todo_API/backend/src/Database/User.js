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
        passwordResetToken VARCHAR(250),
        passwordRestExpires TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
        created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        CREATE TABLE tasks(
            id SERIAL PRIMARY KEY,
            title TEXT,
            description TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            id_user INTEGER REFERENCES users(id)
        );`);
        //db.query(``);

         db.end()

        console.log('TABLES CREATED SUCESSFULLY..');
}

createTables();
