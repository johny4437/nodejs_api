const express = require('express');
const db = require('../Database/connection');

module.exports = {
    async index( req, res){
    
      try {
          const results = await  db.query('SELECT * FROM todo');
          console.log(results.rows);
          return res.json(results);
      } catch (error) {
          console.log("error")
      }
    },

    async store(req, res){
       
        try {
            const {todo} = req.body;
            await db.query(`INSERT INTO todo(todo) VALUES($1)`, [todo]);
            return res.json(todo);
            
        } catch (error) {
           console.log("error")
        }
    },
};