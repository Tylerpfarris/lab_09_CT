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

    .get('/:id', async (req, res, next) => {
        MezcalServices
            .getByIdService(req.params.id)
            .then(mezcal => res.send(mezcal))
            .catch(next);
    })

    .put('/:id', async (req, res, next) => {
        MezcalServices
            .updateByIdService(req.body, req.params.id)
            .then(mezcal => res.send(mezcal))
            .catch(next);
    })

    .delete('/:id', async (req, res, next) => {
        MezcalServices
            .deleteByIdService(req.params.id)
            .then(mezcal => res.send(mezcal))
            .catch(next);
        
    })