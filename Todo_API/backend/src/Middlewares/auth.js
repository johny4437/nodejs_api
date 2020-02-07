module.exports = (req, res, next) => {

    const authHeader =  req.headers.authorization;

    if(!authHeader){
        res.json("No Token provided..");
    }

    const parts = authHeader.split(' ');

    if(!parts.length == 2 ){
        res.staus(401).json("Token Error");
    }

}