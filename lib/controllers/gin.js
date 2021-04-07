const { Router } = require('express');
const GinServices = require('../services/GinServices');

module.exports = Router()

    .post('/', async (req, res, next) => {
        GinServices
            .createService(req.body)
            .then(gin => res.send(gin))
            .catch(next);
    })
    .get('/', async (req, res, next) => {
        GinServices
            .getAllService()
            .then(gin => res.send(gin))
            .catch(next);
    })
    .get('/:id', async (req, res, next) => {
        GinServices
            .getByIdService(req.params.id)
            .then(gin => res.send(gin))
        .catch(next)
    })
    .put('/:id', async (req, res, next) => {
        GinServices
            .updateByIdService(req.body, req.params.id)
            .then(gin => res.send(gin))
            .catch(next);
    })
    .delete('/:id', async (req, res, next) => {
        GinServices
            .deleteByIdService(req.params.id)
            .then(gin => res.send(gin))
            .catch(next);
    })