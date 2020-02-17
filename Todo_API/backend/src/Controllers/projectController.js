const express = require('express');
const authMiddleware  = require('../Middlewares/auth');
const db = require('../Database/connection');

module.exports = {

    async index(req, res){
        try {

            const results =  await db.query("SELECT *FROM tasks");
            res.json(results.rows);
            //res.json({ok:true, user: req.userId});
            
        } catch (error) {
            res.json({error:"No such tasks.."})            
        }
        

    },

    async store(req, res){

        try {
            const {title, description} = req.body;
            await db.query("INSERT INTO tasks(title, description, id_user) VALUES($1, $2, $3)",[title, description, req.userId],(error, results)=>{
                if(error){
                    res.json("ERRO TO INSERT");
                }else{
                    res.json({title, description});
                }
            });
           // res.json({title, description});
        } catch (error) {
            res.json({error:"Error to create a Task.."})
        }

    
    },
}