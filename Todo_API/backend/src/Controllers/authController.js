const db = require('../Database/connection');

module.exports = {
    async index( req, res){
        await db.connect()
            try {
             const  { name, email, password } = req.body;
             await db.query('INSERT INTO users (name, email, password) VALUES($1, $2, $3)',[name, email, password]);
             return res.json({ name, email, password })
            } catch (error) {
                console.log('Error to insert data..')
            }
    }
};
