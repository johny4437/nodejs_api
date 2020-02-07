const express = require('express');
const authMiddleware  = require('../Middlewares/auth');

module.exports = {

    async index(req, res){
        res.json({ok:true});

    }
}