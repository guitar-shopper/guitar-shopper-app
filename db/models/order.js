'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('orders', {
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
    // OB/BJM: order status
})

//assocations: user, purchaseItems(joinTable)

// module.exports.associations = (Thing, {User, Favorite}) => {
//   Thing.belongsToMany(User, {as: 'lovers', through: Favorite})
// }

module.exports.associations = (Order, {User, PurchaseItem}) => {
    Order.belongsTo(User)
    Order.hasMany(PurchaseItem)
}