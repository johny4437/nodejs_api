const {Client} = require('pg');
const db = require('./connection');

async function dropTables(){
    await db.connect();
    await db.query(' DROP TABLE users');
    await db.end()

    console.log('dbs dropped..')
}

dropTables();
