const { Router } = require('express');
const MezcalServices = require('../services/MezcalServices');

module.exports = Router()
    .post('/', async (req, res, next) => {
        MezcalServices
            .create(req.body)
            .then(mezcal => res.send(mezcal))
            .catch(next);
    })
    
    .get('/', async (req, res, next) => {
        MezcalServices
            .getAllService()
            .then(mezcal => res.send(mezcal))
            .catch(next);
    })