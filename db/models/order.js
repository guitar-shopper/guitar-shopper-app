'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('orders', {
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },
    city: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },
    state: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },
    creditCardNumber: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },
    cardHolderName: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },
    expirationMonth: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },
    expirationYear: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },
    totalPrice: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    }
})

//assocations: user, purchaseItems(joinTable)

// module.exports.associations = (Thing, {User, Favorite}) => {
//   Thing.belongsToMany(User, {as: 'lovers', through: Favorite})
// }

module.exports.associations = (Order, { User, PurchaseItem }) => {
    Order.belongsTo(User)
    Order.hasMany(PurchaseItem)
}
