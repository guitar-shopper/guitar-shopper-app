'use strict'

const db = require('APP/db')
const User = db.model('users')
const Cart = db.model('carts')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
  .get('/',
    // The forbidden middleware will fail *all* requests to list users.
    // Remove it if you want to allow anyone to list all users on the site.
    //
    // If you want to only let admins list all the users, then you'll
    // have to add a role column to the users table to support
    // the concept of admin users.
    forbidden('listing users is not allowed'),
    (req, res, next) =>
      User.findAll()
        .then(users => res.json(users))
        .catch(next))
  .post('/',
    (req, res, next) => {
      const userProm = User.create(req.body)
      const cartProm = Cart.create()
      Promise.all([userProm, cartProm])
      .then(result => {
        var cart = result[1]
        var user = result[0]
        cart.setUser(user.id)
        console.log(user.id)
        return user;
      })
      .then(result => {
        res.status(201).json(result)
      })
      .catch(next)
    })
      
      // .then(user => res.status(201).json(user))
      // .catch(next))
  .get('/:id',
    mustBeLoggedIn,
    (req, res, next) =>
      User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(next))
