'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('guitars', {
  model: {
    type: Sequelize.STRING,
    allowNull: false,
    // OB/BJM: consider notEmpty validation
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
    // OB/BJM: consider url validations (be aware this can have issues with some urls)
  },
  price: {
    type: Sequelize.FLOAT, // OB/BJM: switch to integer and measure in cents
    allowNull: false
  }
})

// OB/BJM: undead code, bury it! (history will always have this)
// module.exports.associations = (Thing, {User, Favorite}) => {
//   Thing.belongsToMany(User, {as: 'lovers', through: Favorite})
// }

module.exports.associations = (Guitar, { Brand }) => {
  Guitar.belongsTo(Brand)
}
