const jwt = require('jsonwebtoken'); 
const authConfig = require('../Config/authConfig');
module.exports = (req, res, next) => {

    const authHeader =  req.headers.authorization;

    if(!authHeader){
        res.json("No Token provided..");
    }

    const parts = authHeader.split(' ');

    if(!parts.length == 2 ){
        res.staus(401).json("Token Error");
    }

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)){
        res.json({error:"token in bad format"});
    }

    jwt.verify(token, authConfig.secret,(err, decoded) => {
        if(err){
            res.json("Invalid Token");
        }else{
            req.userId = decoded.id;
            
            return next();
        
        }
    } );

}