'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('guitars', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  orientation: {
    type: Sequelize.ENUM('right', 'left'),
    defaultValue: 'right'
  },
  description: {
    type: Sequelize.TEXT
  },
  imageURL: {
    type: Sequelize.STRING,
    // allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  } 
})

// module.exports.associations = (Thing, {User, Favorite}) => {
//   Thing.belongsToMany(User, {as: 'lovers', through: Favorite})
// }

module.exports.associations = (Guitar, { Brand }) => {
  Guitar.belongsTo(Brand)
}
