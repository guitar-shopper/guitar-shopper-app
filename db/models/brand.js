'use strict'

const Sequelize = require('sequelize')

// OB/BJM: inconsistent indentation (stay consistent)
module.exports = db => db.define('brands', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    phone: Sequelize.STRING,
    location: Sequelize.ARRAY(Sequelize.DOUBLE),
    description: {
        type: Sequelize.TEXT
    },
    websiteURL: {
        type: Sequelize.STRING,
        allowNull: false
    },
})


// module.exports.associations = (Thing, {User, Favorite}) => {
//   Thing.belongsToMany(User, {as: 'lovers', through: Favorite})
// }

module.exports.associations = (Brand, {Guitar}) => {
    Brand.hasMany(Guitar)
}