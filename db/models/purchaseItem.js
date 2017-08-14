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

module.exports.associations = (PurchaseItem, {User, Guitar}) => {
    PurchaseItem.belongsTo(User)
    PurchaseItem.belongsTo(Guitar)
}
