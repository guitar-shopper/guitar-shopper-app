'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('carts', {
  
})

//associations: user, guitar(join table)

// module.exports.associations = (Thing, {User, Favorite}) => {
//   Thing.belongsToMany(User, {as: 'lovers', through: Favorite})
// }

module.exports.associations = (Cart, {User, Guitar, Carts_Guitars}) => {
    Cart.belongsTo(User)
    Cart.belongsToMany(Guitar, {through: Carts_Guitars })
}