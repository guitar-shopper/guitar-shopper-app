const db = require('APP/db')
const Guitar = db.model('guitars')

module.exports = require('express').Router()
    .get('/',
    (req, res, next) =>
        Guitar.findAll()
            .then(guitars => res.json(guitars))
            .catch(next))
    .post('/',
    (req, res, next) =>
        Guitar.create(req.body)
            .then(guitar => res.status(201).json(guitar))
            .catch(next))
    .get('/:id',
    // mustBeLoggedIn,
    (req, res, next) =>
        Guitar.findById(req.params.id)
            .then(guitar => res.json(guitar))
            .catch(next))
    .put('/:id',
    // mustBeLoggedIn,
    (req, res, next) =>
        Guitar.update(req.body, {where: {id:req.params.id}})
            .then(guitar => res.json(guitar))
            .catch(next))
    .delete('/:id',
    // mustBeLoggedIn,
    (req, res, next) =>
        Guitar.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(guitar => res.json(guitar))
            .catch(next));
