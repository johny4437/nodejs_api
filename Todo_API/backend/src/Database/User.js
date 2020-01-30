const {Client} = require('pg');
const db = require('./connection');



async function createTables(){
    await db.connect();
    await db.query(`CREATE TABLE users(
        id serial PRIMARY KEY,
        name  VARCHAR(250) UNIQUE NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(50) UNIQUE NOT NULL,
        created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`);

        await db.end()

        console.log('TABLES CREATED SUCESSFULLY..');
}

createTables();
