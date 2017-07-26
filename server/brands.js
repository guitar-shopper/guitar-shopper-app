/**
 * Created by kieranderfus on 7/26/17.
 */
const db = require('APP/db');
const Brand = db.model('brands');

module.exports = require('express').Router()
    .get('/',
        (req, res, next) =>
            Brand.findAll()
                .then(brands => res.json(brands))
                .catch(next))
    .post('/',
        (req, res, next) =>
           Brand.create(req.body)
                .then(brand => res.status(201).json(brand))
                .catch(next))
    .get('/:id',
        // mustBeLoggedIn,
        (req, res, next) =>
            Brand.findById(req.params.id)
                .then(brand => res.json(brand))
                .catch(next))
    .put('/:id',
        // mustBeLoggedIn,
        (req, res, next) =>
           Brand.update(req.body, {where: {id:req.params.id}})
                .then(brand => res.json(brand))
                .catch(next))
    .delete('/:id',
        // mustBeLoggedIn,
        (req, res, next) =>
            Brand.destroy({
                where: {
                    id: req.params.id
                }
            })
                .then(brand => res.json(brand))
                .catch(next));