const express = require('express');
const app = express();
const db = require('./Database/connection');
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.get('/addtask', async(req, res) => {
      db.connect();
        try {
            const results = await  db.query('SELECT * FROM todo');
            console.log(results.rows);
            return res.json(results);
        } catch (error) {
            console.log("error")
        }
    

   

});

app.post('/addtask', async(req, res) =>{
    
    
     db.connect();
     try {
         const {todo} = req.body;
         await db.query(`INSERT INTO todo(todo) VALUES($1)`, [todo]);
         return res.json(todo);
         
     } catch (error) {
        console.log("error")
     }
    
    
});


app.listen(3344);
