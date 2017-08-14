'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('carts', {
  
})

module.exports.associations = (Cart, {User, Guitar, Carts_Guitars}) => {
    Cart.belongsTo(User)
    Cart.belongsToMany(Guitar, {through: Carts_Guitars })
}