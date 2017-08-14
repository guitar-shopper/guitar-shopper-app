'use strict';

const Sequelize = require('sequelize');

module.exports = db => db.define('brands', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    phone: Sequelize.STRING,
    location: Sequelize.STRING,
    description: {
        type: Sequelize.TEXT
    },
    websiteURL: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img: Sequelize.STRING
});


// module.exports.associations = (Thing, {User, Favorite}) => {
//   Thing.belongsToMany(User, {as: 'lovers', through: Favorite})
// }

module.exports.associations = (Brand, {Guitar}) => {
    Brand.hasMany(Guitar)
};