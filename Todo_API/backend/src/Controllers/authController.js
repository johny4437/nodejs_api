const db = require('../Database/connection');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs');


module.exports = {

//List All Users
    async getUsers(req, res){
         await db.query("SELECT * FROM users ORDER  BY id ASC",(err, results) => {
            if(err){
                console.log(err.stack);
            }else{
                res.status(200).json(results.rows);
                console.log(results.rows)
            }
        }  );

    },
//List One USER
    async getUsersById(req, res){
        const { id } = req.params;
         db.query("SELECT * FROM users WHERE id=$1", [ id ], (err, results) => {
           if(err){
               console.log(err.stack);
           }else{
               res.status(200).json(results.rows);
               console.log(results.rows)
           }
       }  );

   },
   // REGISTRATION OF USERS
    async index( req, res){
            var {name, email, password} = req.body;

                bcrypt.hash(password, 8, (err, hash)=>{
                    if(err){
                        console.log("ERROR");
                    }else{
                        password = hash;
                        //res.json(password)
                        db.query("INSERT INTO users(name, email, password) VALUES($1, $2, $3 )",[name, email, password], (err, results)=>{
                            if(err){
                                console.log("ERROR TO INSERT..")
                            }else{
                                console.log("INSERTED")
                                res.json({message:"Inserted"});
                            }
                        })
                    }
                });

            

            
            
             
            
            

    },

    async store(req, res){

        const {email, password} = req.body;


        const user = await db.query("SELECT * FROM users WHERE email=$1 AND password=$2",[email , password]);

        if(!user){
            return res.status(400).send({error: "User Not Found"});
        }else{
            return res.status(200).json({message:"Loggin"})
        }
     

           
        
           

    }
};
