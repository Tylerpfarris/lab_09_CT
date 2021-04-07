const { Router } = require("express");
const NonsenseServices = require("../services/NonsenseServices");


module.exports = Router()

    .post('/', async (req, res, next) => {
        NonsenseServices
            .createService(req.body)
            .then(nonsense => res.send(nonsense))
            .catch(next);
    })
    .get('/', async (req, res, next) => {
        NonsenseServices
            .getAllService()
            .then(nonsense => res.send(nonsense))
            .catch(next);
    })
    .get('/:id', async (req, res, next) => {
        NonsenseServices
            .getByIdService(req.params.id)
            .then(nonsense => res.send(nonsense))
            .catch(next);
    })
    .put('/:id', async (req, res, next) => {
        NonsenseServices
            .updateByIdService(req.body, req.params.id)
            .then(nonsense => res.send(nonsense))
            .catch(next);
    })
    .delete('/:id', async (req, res, next) => {
        NonsenseServices
            .deleteByIdService(req.params.id)
            .then(nonsense => res.send(nonsense))
            .catch(next);
})