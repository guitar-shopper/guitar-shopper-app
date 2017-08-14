'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('purchaseItems', {
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    price: {
        type: Sequelize.FLOAT
    }
})

//associations: user, guitar, order,

// module.exports.associations = (Thing, {User, Favorite}) => {
//   Thing.belongsToMany(User, {as: 'lovers', through: Favorite})
// }

module.exports.associations = (PurchaseItem, {User, Guitar}) => {
    PurchaseItem.belongsTo(User)
    PurchaseItem.belongsTo(Guitar)
}
