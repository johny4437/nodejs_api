const db = require('./connection');

async function select(){
    await db.connect();
    const results = await db.query("SELECT email FROM users WHERE  id = 3", (err, res) =>{
        if (err) {
            console.log(err.stack)
          } else {
            console.log(res.rows)
          }
    });
    
}

select();