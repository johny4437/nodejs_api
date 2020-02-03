const { Pool } = require('pg');


const client = new Pool({
    user:'postgres',
    host:'localhost',
    database:'rest_api',
    password:'1234',
    port:5432,

});

module.exports=client;